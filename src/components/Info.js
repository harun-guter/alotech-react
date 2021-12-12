import "../assets/stylesheets/Info.scss";
import InfoItem from "./items/InfoItem";
import {info} from "../data/info";

function Info() {
    return (
        <div className={"info mt-2 mb-3 py-2"}>
            {
                info.map((info) => <InfoItem key={info.id} info={info}/>)
            }
        </div>
    );
}

export default Info;
