import "../../assets/stylesheets/CustomStatusSelectItem.css";
import {customStatus} from "../../data/customStatus";

function CustomStatusSelectItem() {
    return (
        <div className={"col-xl-2 col-lg-4 col-12"}>
            <div className={"custom-status-select-item my-1"}>
                <select className={"form-select"} defaultValue={"1"} onChange={(e) => console.log(e.target.value)}>
                    <option value={"1"} disabled>Select status</option>
                    {
                        customStatus.map((customStatus) =>
                            <option key={customStatus.id} value={customStatus.data}>
                                {customStatus.title}
                            </option>)
                    }
                </select>
            </div>
        </div>
    );
}

export default CustomStatusSelectItem;
