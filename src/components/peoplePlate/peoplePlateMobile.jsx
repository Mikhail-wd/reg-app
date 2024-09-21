import { AppContext } from "../../App"
import { useState, useContext } from "react"
import Button from "../buttons/button"
import man from "../../img/man.png"
import "./peoplePlateMobile.css"

export default function PeoplePlateMobile({ fileType, color = "blue", hieght = "long", src, modal = false, title = null, content = null }) {
    const context = useContext(AppContext)
    const [compState] = useState({
        compColor(value) {
            switch (value) {
                case "green":
                    return "plate-green"
                case "blue":
                    return "plate-blue"
                case "yellow":
                    return "plate-yellow"
                case "purple":
                    return "plate-purple"
                default:
                    console.log("Error")
            }
        },
        blockHieght: hieght === "long" ? "long-plate" : "short-plate"
    })
    function sendindData(event) {
        event.stopPropagation()
        context.dispatchData({ type: "transfer_data", payload: { title, content } })
    }
    return (
        <>
            <div className={`mobile-SwipeContent ${compState.compColor(color)}`}>
                <div className="mobile-userInfo">
                    <h1>{title}</h1>
                    <p>{content}</p>
                    {/* <div className="mobile-buttonsControl">
                        <Button size={"big"} color={"blue"} turn={"left"} content={"Start Today!"} />
                        <Button size={"big"} color={"grey"} turn={"right"} content={"Registration"} />
                    </div>
                    <p>Join on <br /> Google Meets</p> */}
                </div>
                {fileType === "img" ?
                    <div style={{ backgroundImage: `url(${man})` }}></div>
                    :
                    <div className="video-wrapperMobileAlter" >
                        <video autoPlay muted loop src={src}>
                        </video>
                    </div>
                }
            </div >
        </>
    )
}