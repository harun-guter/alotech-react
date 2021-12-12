import "../../assets/stylesheets/AgentStatusItem.scss";
import {MainContext, useContext} from "../../Context";

function AgentStatusItem(props) {
    const {agentStatus} = useContext(MainContext);
    return (
        <div className={"col-xl-2 col-lg-4 col-12"}>
            <div
                className={props.status.data === agentStatus ? "agent-status-item my-1 agent-status-item" : "agent-status-item my-1"}
                onClick={props.onClick}
                style={props.status.data === agentStatus ? {borderColor: props.status.color} : null}>
                <i className={props.status.icon + " mx-xl-2 mx-5"} style={{color: props.status.color}}/>
                <div>
                    <span>{props.status.title}</span>
                    <span>
                        {"00:00:00"}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default AgentStatusItem;
