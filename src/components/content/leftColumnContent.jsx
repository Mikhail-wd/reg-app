import "./leftColumnContent.css"
import Button from "../buttons/button"
import { useContext } from "react"
import { AppContext } from "../../App"

export default function LeftContent() {

    const context = useContext(AppContext)

    return (
        <div className="left-content-wrapper">
            <div className="left-content">
                {/* <img src={dots} alt="dots"  className="dots-image"/> */}
                <div >
                    <h1 className="left-content-footer-title">{context.data.title}</h1>
                    <p className="left-content-footer-text">{context.data.content}</p>
                </div>
                <div className="left-content-footer">
                    <Button content="Start Today !" color="blue" turn="left" />
                    <Button content="Registration" color="grey" turn="right" />
                </div>
            </div>
            <div className="left-content-util">
                <p>Join on <br /> Google Meets</p>
            </div>
        </div>
    )
}