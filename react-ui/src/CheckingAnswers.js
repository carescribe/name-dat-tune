import Homer from "./images/gifs/homer.gif";
import Round from "./images/round.png";
import PleaseWait from "./images/please-wait.png";

const CheckingAnswers = () => {
    return (
        <div style={{
            flex: 1,
            padding: 40,
            position: "relative"
        }} >            
            <img src={Homer} style={{height: "100%"}}/>
            <div style={{
                height: "100%",
                width: "100%",
                position: "aboslute",
                top: 0,
                transform: "translateY(-60%)",           
            }}>
                <img src={PleaseWait}/>
            </div>
        </div>
    );
}

export default CheckingAnswers;
