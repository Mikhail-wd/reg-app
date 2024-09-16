import "./rightColumnContent.css"
import PeoplePlate from "../peoplePlate/peoplePlate"
import Button from "../buttons/button"



export default function RightContent({ data }) {

    function shuffleArray(array) {
        let shuffledArray = array.length;
        while (shuffledArray != 0) {
            let randomIndex = Math.floor(Math.random() * shuffledArray);
            shuffledArray--;
            [array[shuffledArray], array[randomIndex]] = [
                array[randomIndex], array[shuffledArray]];
        }

        return array
    }
    return (
        <div className="right-content-wrapper">
            {/* <div className="right-column-login">
                <Button content={"Sing in"} size="small" turn="right" color="yellow" />
            </div> */}
            <div className="plate-group-main">
                <div className="right-content-lower">
                    {data.map((element, index) => {
                        return <PeoplePlate color={element.color} title={element.title} content={element.content} />
                    })}
                </div>
                <div className="right-content-upper">
                    {data.map((element, index) => {
                        return <PeoplePlate color={element.color} title={element.title} content={element.content} />
                    })}
                </div>
                <div className="right-content-lower">
                    {data.map((element, index) => {
                        return <PeoplePlate color={element.color} title={element.title} content={element.content} />
                    })}
                </div>
            </div>
            <div className="plate-group-support">
                <div className="right-content-lower">
                    {data.map((element, index) => {
                        return <PeoplePlate color={element.color} title={element.title} content={element.content} />
                    })}
                </div>
                <div className="right-content-upper">
                    {data.map((element, index) => {
                        return <PeoplePlate color={element.color} title={element.title} content={element.content} />
                    })}
                </div>
                <div className="right-content-lower">
                    {data.map((element, index) => {
                        return <PeoplePlate color={element.color} title={element.title} content={element.content} />
                    })}
                </div>
            </div>

        </div>
    )
}