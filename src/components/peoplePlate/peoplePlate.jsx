import { AppContext } from "../../App"
import { useState, useContext } from "react"
import man from "../../img/man.png"
import "./peoplePlate.css"

export default function PeoplePlate({ fileType, color = "blue", hieght = "long", src, modal = false, title = null, content = null }) {
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
            {modal ?
                <div onClick={(e) => { sendindData(e) }}
                    className={`peoplePlateModalWrapper keen-slider__slide ${compState.blockHieght}`}
                >
                    <div className={`plate-media-wrapper ${compState.compColor(color)}`} >
                        {fileType === "img" ?
                            <div style={{ backgroundImage: `url(${man})` }}></div>
                            :
                            <div>
                                <div className="video-wrapperMobile">
                                    <video className="plate-videoMobile" autoPlay muted loop src={src}>
                                    </video>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                :
                <div onClick={(e) => { sendindData(e) }}
                    className={`peoplePlate keen-slider__slide ${compState.blockHieght} ${compState.compColor(color)}`}
                >
                    {fileType === "img" ?
                        <div style={{ backgroundImage: `url(${man})` }}></div>
                        :
                        <div>
                            <div className="video-wrapper">
                                <video className="plate-video" autoPlay muted loop src={src}>
                                </video>
                            </div>
                        </div>
                    }
                </div>
            }

        </>

    )
}