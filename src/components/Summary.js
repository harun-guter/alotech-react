import '../assets/stylesheets/Summary.css';

function Summary() {
    return (
        <div className={"row px-2"}>
            <div className={"summary mt-2"}>
                <div className={"summary-item col-xl-3"}>
                    <i style={{color: "#f1c40f"}} className={"fas fa-pause"}/>
                    <span>Waiting: 0</span>
                </div>
                <div className={"summary-item col-xl-3"}>
                    <i style={{color: "#2ecc71"}} className={"fas fa-microphone-alt"}/>
                    <span>Talking: 0</span>
                </div>
                <div className={"summary-item col-xl-3"}>
                    <i style={{color: "#f39c12"}} className={"fas fa-coffee"}/>
                    <span>Break: 0</span>
                </div>
                <div className={"summary-item col-xl-3"}>
                    <i style={{color: "#2ecc71"}} className={"fas fa-phone"}/>
                    <span>Available: 0</span>
                </div>
            </div>
        </div>
    )
}

export default Summary;
