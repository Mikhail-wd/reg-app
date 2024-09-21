import { useState } from "react"
import { useKeenSlider } from "keen-slider/react";
import PeoplePlate from '../peoplePlate/peoplePlate'
import arrow from '../../img/arrowLeft.svg'
import gsap from "gsap/all"
import "keen-slider/keen-slider.min.css";
import "./sideModal.css"

const Slider = ({ data }) => {

    const animation = { duration: 22000, easing: (t) => t };

    const [sliderRef] = useKeenSlider({
        vertical: true,
        drag: true,
        rubberband: true,
        loop: true,
        renderMode: "performance",
        slides: { perView: "auto", spacing: 10 },
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

    return (
        <div className="right-content-wrapper">
            <div className="plate-group-mainMobile" >
                <div ref={sliderRef} className="keen-slider right-content-first">
                    {data.map((element, index) => {
                        return <PeoplePlate key={index}
                            src={element.src}
                            fileType={element.type}
                            color={element.color}
                            title={element.title}
                            content={element.content}
                            modal={true}
                            hieght={"modal"} />
                    })}
                </div>
            </div>
        </div>
    );
};

export default function SideModal({ data }) {
    const [modalState, setModalState] = useState(false)

    function toggleSideModal(event) {
        event.stopPropagation()
        const timeLine = gsap.timeline();

        if (!modalState) {
            setModalState(true)
            timeLine.to(".modal-wrapper", { xPercent: -100, delay: 0.2 })
                .to(".button-modal-img", {
                    borderTopLeftRadius: 15,
                    borderBottomLeftRadius: 15,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    scaleX: -1,
                    delay: 0
                })
        } else {
            setModalState(false)
            timeLine.to(".modal-wrapper", { xPercent: 0, delay: 0.2 })
                .to(".button-modal-img", {
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderTopRightRadius: 15,
                    borderBottomRightRadius: 15,
                    scaleX: 1,
                    delay: 0
                })
        }
    }
    return (
        <>
            <div className="modal-wrapper" onClick={(event) => toggleSideModal(event)}>
                <div className="button-modal" onClick={(event) => toggleSideModal(event)}>
                    <img draggable="false" src={arrow} alt="arrow" className="button-modal-img" />
                </div>
                <ul className="modal-leftColumn">
                    <li>Lorem, ipsum.</li>
                    <li>amet consectetur adipisicing </li>
                    <li>Lorem, ips </li>
                    <li>it amet </li>
                    <li>adipisicing</li>
                    <li>posting</li>
                </ul>
                <Slider data={data} />
            </div>
        </>
    )
}