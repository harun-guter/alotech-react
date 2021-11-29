import "../../assets/stylesheets/AgentStatusItem.css";

function AgentStatusItem({status}) {
    return (
        <div className={"col-xl-2 col-lg-4 col-12"}>
            <div className={status.id === 1 ? "agent-status-item my-1 active-status" : "agent-status-item my-1"} onClick={() => console.log(status.data)}>
                <i className={status.icon + " mx-xl-2 mx-5"} style={{color: status.color}}/>
                <div>
                    <span>{status.title}</span>
                    <span>{"00:00:00"}</span>
                </div>
            </div>
        </div>
    );
}

export default AgentStatusItem;
