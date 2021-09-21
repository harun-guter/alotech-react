import '../../assets/stylesheets/StatusItem.css';

function StatusItem(props) {
    return (
        <div className={"col-xl-2 px-1"}>
            <div className={props.status.id === 1 ? "status-item active" : "status-item"}>
                <div style={{color: props.status.color}}>
                    <i className={props.status.icon}/>
                </div>
                <div>
                    <span>{props.status.title}</span>
                    <span>{"00:00:00"}</span>
                </div>
            </div>
        </div>
    )
}

export default StatusItem;
