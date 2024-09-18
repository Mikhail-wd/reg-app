import "./rightColumnContent.css";
import PeoplePlate from "../peoplePlate/peoplePlate";
import gsap from 'gsap';
import { useEffect, memo, useRef } from "react";
import { Draggable } from "gsap/all";


const RightContent = memo(function RightContent({ data }) {
    gsap.registerPlugin(Draggable)
    const sliderRef = useRef(null);

    function verticalLoop(items, config) {
        items = gsap.utils.toArray(items);
        config = config || {};
        items.forEach(items => {
            items.addEventListener("mouseenter", () => gsap.to(tl, {
                timeScale: 0,
            }
            ));
            items.addEventListener("mouseleave", () => gsap.to(tl, {
                timeScale: 1,
            }));
        });
        let onChange = config.onChange,
            lastIndex = 0,
            tl = gsap.timeline({
                repeat: config.repeat,
                onUpdate:
                    onChange &&
                    function () {
                        let i = tl.closestIndex();
                        if (lastIndex !== i) {
                            lastIndex = i;
                            onChange(items[i], i);
                        }
                    },
                paused: config.paused,
                defaults: { ease: "none" },
                onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 400)
            }),
            length = items.length,
            startY = items[0].offsetTop,
            times = [],
            heights = [],
            spaceBefore = [],
            yPercents = [],
            curIndex = 0,
            center = config.center,
            clone = (obj) => {
                let result = {},
                    p;
                for (p in obj) {
                    result[p] = obj[p];
                }
                return result;
            },
            pixelsPerSecond = (config.speed || 1) * 100,
            snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
            timeOffset = 0,
            container =
                center === true
                    ? items[0].parentNode
                    : gsap.utils.toArray(center)[0] || items[0].parentNode,
            totalHeight,
            getTotalHeight = () =>
                items[length - 1].offsetTop +
                (yPercents[length - 1] / 100) * heights[length - 1] -
                startY +
                spaceBefore[0] +
                items[length - 1].offsetHeight *
                gsap.getProperty(items[length - 1], "scaleY") +
                (parseFloat(config.paddingBottom) || 0),
            populateHeights = () => {
                let b1 = container.getBoundingClientRect(),
                    b2;
                items.forEach((el, i) => {
                    heights[i] = parseFloat(gsap.getProperty(el, "height", "px"));
                    yPercents[i] = snap(
                        (parseFloat(gsap.getProperty(el, "y", "px")) / heights[i]) * 100 +
                        gsap.getProperty(el, "yPercent")
                    );
                    b2 = el.getBoundingClientRect();
                    spaceBefore[i] = b2.top - (i ? b1.bottom : b1.top);
                    b1 = b2;
                });
                gsap.set(items, {
                    // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
                    yPercent: (i) => yPercents[i]
                });
                totalHeight = getTotalHeight();
            },
            timeWrap,
            populateOffsets = () => {
                timeOffset = center
                    ? (tl.duration() * (container.offsetWidth / 2)) / totalHeight
                    : 0;
                center &&
                    times.forEach((t, i) => {
                        times[i] = timeWrap(
                            tl.labels["label" + i] +
                            (tl.duration() * heights[i]) / 2 / totalHeight -
                            timeOffset
                        );
                    });
            },
            getClosest = (values, value, wrap) => {
                let i = values.length,
                    closest = 1e10,
                    index = 0,
                    d;
                while (i--) {
                    d = Math.abs(values[i] - value);
                    if (d > wrap / 2) {
                        d = wrap - d;
                    }
                    if (d < closest) {
                        closest = d;
                        index = i;
                    }
                }
                return index;
            },
            populateTimeline = () => {
                let i, item, curY, distanceToStart, distanceToLoop;
                tl.clear();
                for (i = 0; i < length; i++) {
                    item = items[i];
                    curY = (yPercents[i] / 100) * heights[i];
                    distanceToStart = item.offsetTop + curY - startY + spaceBefore[0];
                    distanceToLoop =
                        distanceToStart + heights[i] * gsap.getProperty(item, "scaleY");
                    tl.to(
                        item,
                        {
                            yPercent: snap(((curY - distanceToLoop) / heights[i]) * 100),
                            duration: distanceToLoop / pixelsPerSecond
                        },
                        0
                    )
                        .fromTo(
                            item,
                            {
                                yPercent: snap(
                                    ((curY - distanceToLoop + totalHeight) / heights[i]) * 100
                                )
                            },
                            {
                                yPercent: yPercents[i],
                                duration:
                                    (curY - distanceToLoop + totalHeight - curY) / pixelsPerSecond,
                                immediateRender: false
                            },
                            distanceToLoop / pixelsPerSecond
                        )
                        .add("label" + i, distanceToStart / pixelsPerSecond);
                    times[i] = distanceToStart / pixelsPerSecond;
                }
                timeWrap = gsap.utils.wrap(0, tl.duration());
            },
            refresh = (deep) => {
                let progress = tl.progress();
                tl.progress(0, true);
                populateHeights();
                deep && populateTimeline();
                populateOffsets();
                deep && tl.draggable
                    ? tl.time(times[curIndex], true)
                    : tl.progress(progress, true);
            },
            proxy;
        gsap.set(items, { y: 0 });
        populateHeights();
        populateTimeline();
        populateOffsets();
        window.addEventListener("resize", () => refresh(true));
        function toIndex(index, vars) {
            vars = clone(vars);
            Math.abs(index - curIndex) > length / 2 &&
                (index += index > curIndex ? -length : length); // always go in the shortest direction
            let newIndex = gsap.utils.wrap(0, length, index),
                time = times[newIndex];
            if (time > tl.time() !== index > curIndex) {
                // if we're wrapping the timeline's playhead, make the proper adjustments
                time += tl.duration() * (index > curIndex ? 1 : -1);
            }
            if (vars.revolutions) {
                time += tl.duration() * Math.round(vars.revolutions);
                delete vars.revolutions;
            }
            if (time < 0 || time > tl.duration()) {
                vars.modifiers = { time: timeWrap };
            }
            curIndex = newIndex;
            vars.overwrite = true;
            gsap.killTweensOf(proxy);
            return tl.tweenTo(time, vars);
        }
        tl.elements = items;
        tl.next = (vars) => toIndex(curIndex + 1, vars);
        tl.previous = (vars) => toIndex(curIndex - 1, vars);
        tl.current = () => curIndex;
        tl.toIndex = (index, vars) => toIndex(index, vars);
        tl.closestIndex = (setCurrent) => {
            let index = getClosest(times, tl.time(), tl.duration());
            setCurrent && (curIndex = index);
            return index;
        };
        tl.times = times;
        tl.progress(1, true).progress(0, true); // pre-render for performance
        if (config.reversed) {
            tl.vars.onReverseComplete();
            tl.reverse();
        }
        tl.closestIndex(true);
        onChange && onChange(items[curIndex], curIndex);
        return tl;
    }

    function play() {
        document.addEventListener('click', () => {
            let elementArray = document.querySelectorAll("video")
            for (let x = 0; x < elementArray.length; x++) {
                elementArray[x].play()
            }
        });
    }

    useEffect(() => {
        play()
    }, [])
    useEffect(() => {
        Draggable.zIndex = 1
        Draggable.create(".right-content-first, .right-content-second, .right-content-third, .right-content-four", {
            type: "y",
            bounds: {
                zIndex: 0,
                minY: data.length,
                maxY: -data.length * 250
            }
        });

        verticalLoop(".right-content-first .peoplePlate", {
            repeat: -1,
            speed: 1,
            draggable: true
        });
        verticalLoop(".right-content-second .peoplePlate", {
            repeat: -1,
            speed: 5,
        });
        verticalLoop(".right-content-third .peoplePlate", {
            repeat: -1,
            speed: 3,
        });
        verticalLoop(".right-content-four .peoplePlate", {
            repeat: -1,
            speed: 2,
        });
    }, [])
    return (
        <div className="right-content-wrapper">
            <div className="plate-group-main" >
                <div className="right-content-first" ref={sliderRef} >
                    {data.map((element, index) => {
                        return <PeoplePlate key={index} fileType={element.type} color={element.color} title={element.title} content={element.content} />
                    })}
                </div>
                <div className="right-content-second">
                    {data.map((element, index) => {
                        return <PeoplePlate key={index} fileType={element.type} color={element.color} title={element.title} content={element.content} />
                    })}
                </div>
                <div className="right-content-third">
                    {data.map((element, index) => {
                        return <PeoplePlate key={index} fileType={element.type} color={element.color} title={element.title} content={element.content} />
                    })}
                </div>
                <div className="right-content-four">
                    {data.map((element, index) => {
                        return <PeoplePlate key={index} fileType={element.type} color={element.color} title={element.title} content={element.content} />
                    })}
                </div>
            </div>
        </div>
    )
})

export default RightContent;