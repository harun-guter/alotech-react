import "../assets/stylesheets/Queue.css";
import {queues} from "../data/queues";

function Queue() {
    return (
        <div className={"queue px-2 mb-2"}>
            <select className={"form-select"} defaultValue={"1"} onChange={(e) => console.log(e.target.value)}>
                <option value={"1"} disabled>Select queue</option>
                {
                    queues.map((queues) =>
                        <option key={queues.id} value={queues.data}>
                            {queues.title}
                        </option>)
                }
            </select>
        </div>
    );
}

export default Queue;
