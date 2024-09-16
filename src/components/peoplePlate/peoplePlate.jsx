import "./peoplePlate.css"
import man from "../../img/man.png"
import { AppContext } from "../../App"
import { useState, useContext } from "react"

export default function PeoplePlate({ type = "img", color = "blue", hieght = "long", img = "", id = 1, title = null, content = null }) {

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
            <div style={{ backgroundImage: `url(${man})` }}>
            </div>
        </div>
    )
}