import "./peoplePlate.css"
import { AppContext } from "../../App"
import { useState, useContext } from "react"
import video from "../../video/testvid.mp4"
import man from "../../img/man.png"

export default function PeoplePlate({ fileType, color = "blue", hieght = "long", src, id = 1, title = null, content = null }) {
    const context = useContext(AppContext)
    const [compState, setCompState] = useState({
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

    return (
        <div onClick={() => { context.dispatchData({ type: "transfer_data", payload: { title, content } }) }} className={`peoplePlate plate-blue ${compState.blockHieght} ${compState.compColor(color)}`}>
            {fileType === "img" ?
                <div style={{ backgroundImage: `url(${man})` }}></div> :
                <div>
                    <video loop autoPlay className="plate-video" id="extravid">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            }
        </div>
    )
}