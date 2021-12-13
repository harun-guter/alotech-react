import "../../assets/stylesheets/CustomStatusSelectItem.scss";
import {customStatus} from "../../data/customStatus";
import {MainContext, useContext} from "../../Context";

function CustomStatusSelectItem() {

    const {setAgentStatus} = useContext(MainContext);

    return (
        <div className={"col-xl-2 col-lg-4 col-12"}>
            <div className={"custom-status-select-item my-1"}>
                <select id={"custom-status"} className={"form-select"} defaultValue={"1"} onChange={(e) => setAgentStatus(e.target.value)}>
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
