import "../assets/stylesheets/Softphone.css";

function Timer() {
    let softphone = true;
    return (
        <span className={"softphone mb-3"}>
            Softphone:
            {
                softphone ?
                    <i className={"fas fa-check"} style={{color: "#2ecc71"}}/> :
                    <i className="fas fa-times" style={{color: "#c0392b"}}/>
            }
        </span>
    );
}

export default Timer;
