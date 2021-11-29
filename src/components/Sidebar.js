import "../assets/stylesheets/Sidebar.css";

import Keypad from "./Keypad";
import Timer from "./Timer";
import Input from "./Input";
import Queue from "./Queue";
import Softphone from "./Softphone";

function Sidebar() {
    return (
        <aside>
            <Timer/>
            <div className={"form"}>
                <Queue/>
                <Input/>
            </div>
            <Keypad/>
            <Softphone/>
        </aside>
    );
}

export default Sidebar;
