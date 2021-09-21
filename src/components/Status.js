import StatusItem from "./items/StatusItem";
import StatusItemMini from "./items/StatusItemMini";

const statusItem = [
    {id: 1, title: "Available", color: "#2ecc71", icon: "fas fa-phone"},
    {id: 2, title: "ACW", color: "#e74c3c", icon: "fas fa-file-alt"},
    {id: 3, title: "Short Break", color: "#f39c12", icon: "fas fa-coffee"},
    {id: 4, title: "Lunch", color: "#3498db", icon: "fas fa-utensils"},
    {id: 5, title: "Training", color: "#9b59b6", icon: "fas fa-pencil-alt"},
    {id: 6, title: "Meeting", color: "#f1c40f", icon: "fas fa-users"}
];

const statusItemMini = [
    {id: 1, title: "Ringing", icon: "fas fa-phone-volume"},
    {id: 2, title: "Talking", icon: "fas fa-microphone-alt"},
    {id: 3, title: "Waiting", icon: "fas fa-pause"},
    {id: 4, title: "Wrap-up", icon: "fas fa-phone-slash"},
];

function Status() {
    return (
        <>
            <div className={"row"}>
                {statusItem.map((status) => <StatusItem status={status} key={status.id}/>)}
            </div>
            <div className="row">
                {statusItemMini.map((status) => <StatusItemMini status={status} key={status.id}/>)}
                <div className={"col-xl-2 px-1"}/>
                <div className={"col-xl-2 px-1"}>
                    <div className={"status-item-mini"}>
                        <div>
                            <i className={"fas fa-user-tag"}/>
                        </div>
                        <div>
                            <select className={"form-select"} defaultValue={"1"}>
                                <option value={"1"} disabled>Select</option>
                                <option value="backoffice">Backoffice</option>
                                <option value="backoffice">Support</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Status;
