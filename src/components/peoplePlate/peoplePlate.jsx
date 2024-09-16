import "./peoplePlate.css"
import man from "../../img/man.png"
import { useState } from "react"

export default function PeoplePlate({ color = "blue", hieght = "long", img = "", id = 1, click = () => { } }) {

    const [compState, setCompState] = useState({
        compColor(value) {
            switch (value) {
                case "green":
                    return "plate-green"
                case "blue":
                    return "plate-blue"
                case "yellow":
                    return "plate-yellow"
                case "purble":
                    return "plate-purple"
                defeult:
                    console.log("Error")
            }
        },
        blockHieght: hieght === "long" ? "long-plate" : "short-plate"
    })

    return (
        <div onClick={() => click(id)} className={`peoplePlate plate-blue ${compState.blockHieght} ${compState.compColor(color)}`}>
            <div style={{ backgroundImage: `url(${man})` }}>
            </div>
        </div>
    )
}