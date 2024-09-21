import { useState } from "react"
import { gsap } from "gsap/all"
import arrow from "../../img/arrowUp.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import PeoplePlateMobile from '../peoplePlate/peoplePlateMobile';
import Knot from "../../img/knot.svg"
import './mobileSwiper.css'
import 'swiper/css';

export default function MobileMainFrame({ data }) {
    const [modalState, setModalState] = useState(false)

    function toggleSideModal(event) {
        event.stopPropagation()
        const timeLine = gsap.timeline();

        if (!modalState) {
            setModalState(true)
            timeLine.to(".mobile-footerMenu", { yPercent: -100, delay: 0.2 })
        } else {
            setModalState(false)
            timeLine.to(".mobile-footerMenu", { yPercent: 0, delay: 0.2 })
        }
    }
    return (
        <div className='mobile-mainFrame'>
            <div className='modal-buttonKnot' onClick={(e) => { toggleSideModal(e) }}>
                <div>
                    <img src={Knot} alt="knot" />
                </div>
            </div>
            <div className='mobile-footerMenu' onClick={(e) => { toggleSideModal(e) }}>
                <div className='mobile-footerMenu-body'>
                    <div className="mobile-footerMenu-list">
                        <div className="mobil-userHeader">
                            <p>New <br />platform coming <br />soon</p>
                        </div>
                        <div className="mobil-userHeader-Timer">
                            <div><span>03:</span><span>Hours</span></div>
                            <div><span>25:</span><span>Minutes</span></div>
                            <div><span>56</span><span>Seconds</span></div>
                        </div>
                        <div className="backgroundBlack ">
                            <button className="buy-nowButton">
                                <img src={arrow} alt="arrow" /><span></span>Buy Now !
                            </button>
                        </div>
                        <div className="mobil-userHeader-footer">
                            <div className="footerTime"><span>At</span><span>19:00 UTC</span></div>
                            <div className="footerData"><span>29</span><span>DEC</span></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="swipe-notifacation">
                <div className="arrowHelpLeft">
                    <div style={{ backgroundImage: `url(${arrow})` }}>
                    </div>
                    <div style={{ backgroundImage: `url(${arrow})` }}>

                    </div>
                    <div style={{ backgroundImage: `url(${arrow})` }}>
                    </div>
                </div>
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="arrowHelpRight">
                    <div style={{ backgroundImage: `url(${arrow})` }}>
                    </div>
                    <div style={{ backgroundImage: `url(${arrow})` }}>
                    </div>
                    <div style={{ backgroundImage: `url(${arrow})` }}>
                    </div>
                </div>
            </div> */}
            {data.length > 0 ?
                <Swiper
                    autoHeight={false}
                    a11y={true}
                    direction={'vertical'}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    sticky={true}
                    className="alterSwiper"
                >
                    {data.map((element, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <PeoplePlateMobile src={element.src}
                                    fileType={element.type}
                                    color={element.color}
                                    title={element.title}
                                    content={element.content}
                                    modal={true}
                                    hieght={"modal"} />
                            </SwiperSlide>
                        )
                    })}

                </Swiper> : null}
        </div>
    )
}