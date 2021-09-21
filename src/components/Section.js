import Status from "./Status";
import Sidebar from "./Sidebar";
import Summary from "./Summary";
import Tables from "./Tables";

function Section() {
    return (
        <div className={"container mt-3"}>
            <div className="row">
                <div className="col-xl-10">
                    <Status/>
                    <Summary/>
                    <Tables/>
                </div>
                <div className="col-xl-2 px-2">
                    <Sidebar/>
                </div>
            </div>
        </div>
    )
}

export default Section;
