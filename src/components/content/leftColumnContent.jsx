import "./leftColumnContent.css"
import Button from "../buttons/button"

export default function LeftContent() {
    return (
        <div className="left-content-wrapper">
            <div className="left-content">
                {/* <img src={dots} alt="dots"  className="dots-image"/> */}
                <div >                    
                    <h1 className="left-content-footer-title">Great meetings are just the beginning</h1>
                    <p className="left-content-footer-text">We help your teams build great meeting habits through collaborative agendas and easy-to-schedule meetings.</p>
                </div>
                <div className="left-content-footer">
                    <Button content="Start Today !" color="blue" turn="left" />
                    <Button content="Registration" color="grey" turn="right" />
                </div>
            </div>
            <div className="left-content-util">
                <p>Join on <br/> Google Meets</p>
            </div>
        </div>
    )
}