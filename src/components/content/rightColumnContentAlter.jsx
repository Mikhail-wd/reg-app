import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import PeoplePlate from '../peoplePlate/peoplePlate'
import "keen-slider/keen-slider.min.css";
import "./rightColumnContent.css";


export default ({ data }) => {

    const animation = { duration: 12000, easing: (t) => t };
    const animation2 = { duration: 6000, easing: (t) => t };
    const animation3 = { duration: 10000, easing: (t) => t };
    const animation4 = { duration: 18000, easing: (t) => t };

    const [sliderRef] = useKeenSlider({
        vertical: true,
        drag: true,
        rubberband: true,
        loop: true,
        renderMode: "performance",
        slides: { perView: "auto",spacing: 20 },
        created(s) {
            s.moveToIdx(5, true, animation);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
    });
    const [sliderRef2] = useKeenSlider({
        vertical: true,
        drag: true,
        rubberband: true,
        loop: true,
        renderMode: "performance",
        slides: { perView: "auto", spacing: 20 },
        created(s) {
            s.moveToIdx(5, true, animation2);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation2);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation2);
        },
    });
    const [sliderRef3] = useKeenSlider({
        vertical: true,
        drag: true,
        rubberband: true,
        loop: true,
        renderMode: "performance",
        slides: { perView: "auto", spacing: 20 },
        created(s) {
            s.moveToIdx(5, true, animation3);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation3);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation3);
        },
    });
    const [sliderRef4] = useKeenSlider({
        vertical: true,
        drag: true,
        rubberband: true,
        loop: true,
        renderMode: "performance",
        slides: { perView: "auto", spacing: 20 },
        created(s) {
            s.moveToIdx(5, true, animation4);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation4);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation4);
        },
    });

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
    return (
        <div className="right-content-wrapper">
            <div className="plate-group-main" >
                <div ref={sliderRef} className="keen-slider right-content-first">
                    {data.map((element, index) => {
                        return <PeoplePlate key={index} src={element.src} fileType={element.type} color={element.color} title={element.title} content={element.content} />
                    })}
                </div>
                <div ref={sliderRef2} className="keen-slider right-content-second">
                    {data.map((element, index) => {
                        return <PeoplePlate key={index} src={element.src} fileType={element.type} color={element.color} title={element.title} content={element.content} />
                    })}
                </div>
                <div ref={sliderRef3} className="keen-slider right-content-third">
                    {data.map((element, index) => {
                        return <PeoplePlate key={index}  src={element.src} fileType={element.type} color={element.color} title={element.title} content={element.content} />
                    })}
                </div>
                <div ref={sliderRef4} className="keen-slider right-content-four">
                    {data.map((element, index) => {
                        return <PeoplePlate key={index} src={element.src} fileType={element.type} color={element.color} title={element.title} content={element.content} />
                    })}
                </div>
            </div>
        </div>
    );
};