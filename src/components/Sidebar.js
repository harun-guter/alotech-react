import "../assets/stylesheets/Sidebar.scss";

import Keypad from "./Keypad";
import Timer from "./Timer";
import Input from "./Input";
import Queue from "./Queue";
import SoftPhone from "./SoftPhone";

function Sidebar() {
    return (
        <aside>
            <Timer/>
            <div className={"form"}>
                <Queue/>
                <Input/>
            </div>
            <Keypad/>
            <SoftPhone/>
        </aside>
    );
}

export default Sidebar;
