import '../../assets/stylesheets/StatusItemMini.css';

function StatusItemMini(props) {
    return (
        <div className="col-xl-2 px-1">
            <div className={"status-item-mini"}>
                <div>
                    <i className={props.status.icon}/>
                </div>
                <div>
                    <span>{props.status.title}</span>
                </div>
            </div>
        </div>
    )
}

export default StatusItemMini;
