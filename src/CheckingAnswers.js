import Homer from "./images/gifs/homer.gif";
import PleaseWait from "./images/please-wait.png";
import RoundTitle from "./lib/RoundTitle";

const CheckingAnswers = ({socket}) => {
    return (
        <div style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            gap: 20
        }}>
            <div style={{
                marginTop: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <RoundTitle roundNumber={1} />
            </div>
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
        </div>
    );
}

export default CheckingAnswers;