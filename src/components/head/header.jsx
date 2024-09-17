import "./header.css"
import Logo from './logo'
import { useState, useRef, useEffect } from "react"
import gsap from "gsap"

export default function Header() {
    const modal = useRef()
    const [toggleBurger, setToggleBurger] = useState(false)

    const toggleModalOn = () => {
        gsap.to(".modal-bg", { yPercent: 100, duration: 0.5 })
    }
    const toggleModalOff = () => {
        gsap.to(".modal-bg", { yPercent: -100, duration: 0.5 })
    }
    useEffect(() => {
    }, [])

    return (
        <div className="header-nav">
            <ul className="header-nav-tabs">
                <li className="header-nav-logo"><Logo />Regs</li>
                <li>About</li>
                <li>Academy</li>
                <li>Feature</li>
                <li className="burger" onClick={() => toggleModalOn()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </li>
            </ul>
            <div className="modal-bg" onClick={() => toggleModalOff()}>
                <ul ref={modal} className="burger-modal">
                    <li onClick={(event) => { event.stopPropagation(); console.log("okey") }}>About</li>
                    <li onClick={(event) => { event.stopPropagation(); console.log("okey") }}>Academy</li>
                    <li onClick={(event) => { event.stopPropagation(); console.log("okey") }}>Feature</li>
                </ul>
            </div>

        </div>
    )
}