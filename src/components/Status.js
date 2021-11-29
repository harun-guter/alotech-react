import AgentStatusItem from "./items/AgentStatusItem";
import CallStatusItem from "./items/CallStatusItem";
import CustomStatusSelectItem from "./items/CustomStatusSelectItem";
import {statuses} from "../data/statuses";
import {callStatuses} from "../data/callStatuses";

function Status() {
    return (
        <>
            <div className={"row"}>
                {statuses.map((statuses) => <AgentStatusItem key={statuses.id} status={statuses}/>)}
            </div>
            <div className={"row"}>
                {callStatuses.map((statuses) => <CallStatusItem key={statuses.id} status={statuses}/>)}
                <CustomStatusSelectItem/>
            </div>
        </>
    );
}

export default Status;
