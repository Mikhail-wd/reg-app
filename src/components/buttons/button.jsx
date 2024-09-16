import "./button.css"

import { useState } from "react"

export default function Button({size = "big", color = "blue", turn = "left",content}) {
    const [compState,setCompState] = useState ({
        size: size === "big" ? "big-button" : "small-button",
        buttonColor: color === "blue"? "button-blue" : color === "yellow" ? "button-yellow" : "button-grey",
        turn: turn === "left" ? "button-left" : "button-right"
    })

    return (
        <button className={compState.size+" "+compState.buttonColor+" "+compState.turn}>
            {content}
        </button>
    )
}