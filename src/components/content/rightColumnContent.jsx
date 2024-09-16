import "./rightColumnContent.css"
import PeoplePlate from "../peoplePlate/peoplePlate"
import Button from "../buttons/button"

export default function RightContent() {
    return (
        <div className="right-content-wrapper">
            {/* <div className="right-column-login">
                <Button content={"Sing in"} size="small" turn="right" color="yellow" />
            </div> */}
            <div className="right-content-lower">
                <PeoplePlate />
                <PeoplePlate />
                <PeoplePlate />
            </div>
            <div className="right-content-upper">
                <PeoplePlate />
                <PeoplePlate />
                <PeoplePlate />
                <PeoplePlate />
            </div>
            <div className="right-content-lower">
                <PeoplePlate />
                <PeoplePlate />
                <PeoplePlate />
            </div>
        </div>
    )
}