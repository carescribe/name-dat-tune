import Homer from "./images/gifs/homer.gif";
import Round from "./images/round.png";
import PleaseWait from "./images/please-wait.png";

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
                <img src={Round} /> <span style={{
                    marginLeft: 20,
                    fontSize:100,
                    color: "#fd4b8c",
                }}>1</span>
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