import AgentStatusItem from "./items/AgentStatusItem";
import CallStatusItem from "./items/CallStatusItem";
import CustomStatusSelectItem from "./items/CustomStatusSelectItem";
import {statuses} from "../data/statuses";
import {callStatuses} from "../data/callStatuses";
import {MainContext, useContext} from "../Context";

function Status() {

    const {setAgentStatus} = useContext(MainContext);

    return (
        <>
            <div className={"row"}>
                {statuses.map((statuses) => <AgentStatusItem
                    key={statuses.id}
                    status={statuses}
                    onClick={() => {
                        setAgentStatus(statuses.data);
                        document.getElementById("custom-status").value = 1;
                    }}/>)}
            </div>
            <div className={"row"}>
                {callStatuses.map((statuses) => <CallStatusItem
                    key={statuses.id}
                    status={statuses}/>)}
                <CustomStatusSelectItem/>
            </div>
        </>
    );
}

export default Status;
