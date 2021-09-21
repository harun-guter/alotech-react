import '../assets/stylesheets/Sidebar.css';

const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, "#", 0, "*"];

function Sidebar() {
    return (
        <div className={"sidebar p-3"}>
            <div>00 : 00 : 00</div>
            <select className={"form-select"} defaultValue={"1"}>
                <option value={"1"}  disabled>Select Queue</option>
                <option value={"Default"}>Default</option>
                <option value={"Support"}>Support</option>
            </select>
            <input type={"text"} placeholder={"0 (5••) ••• ••••"} className={"form-control"} readOnly/>
            <div className="row call-control">
                <button className={"btn btn-dark"}><i className={"fas fa-phone-alt"}/></button>
                <button className={"btn btn-dark"}><i className={"fas fa-phone-slash"}/></button>
                <button className={"btn btn-dark"}><i className={"fas fa-hand-paper"}/></button>
                <button className={"btn btn-dark"}><i className={"fas fa-exchange-alt"}/></button>
            </div>
            <div className={"dial-buttons"}>
                {buttons.map((number) => <button className={"btn btn-dark"} key={number}>{number}</button>)}
            </div>
            <div className={"mute"}>
                <button className={"btn btn-dark"}>
                    <span/>
                    <i className={"fas fa-microphone"}/>
                </button>
            </div>
            <div className="control-buttons">
                <button className={"btn btn-dark"}>
                    <i className={"fas fa-phone-alt"}/>
                    Line
                </button>
                <button className={"btn btn-dark"}>
                    <i className={"fas fa-phone-alt"}/>
                    Line
                </button>
                <button className={"btn btn-dark"}>
                    <i className={"fas fa-cogs"}/>
                    Settings
                </button>
                <button className={"btn btn-dark"}>
                    <i className={"fas fa-users"}/>
                    Conference
                </button>
            </div>
            <div className={"soft-phone-status"}>
                Softphone:
                <span> registered</span>
            </div>
        </div>
    )
}

export default Sidebar;
