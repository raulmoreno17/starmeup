import "./CoreValue.scss"
const CoreValue = (props) => {
    const myStyle = {
        backgroundColor: props.color
    };
    return <div className="value__container" style={myStyle}>
        <img alt="value-img" src={require("../../../assets/values/kudos.png")} className="value__icon"></img>
        <span>{props.text}</span>
    </div>
};
export default CoreValue;
