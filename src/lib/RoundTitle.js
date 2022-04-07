import Round from "../images/round.png";

const RoundTitle = ({roundNumber}) => {
    return (
        <div style={{
            whiteSpace: "nowrap"
        }}>
            <img src={Round} /> <span style={{
                marginLeft: 20,
                fontSize:100,
                color: "#fd4b8c",
            }}>{roundNumber}</span>
        </div>
    );
}

export default RoundTitle