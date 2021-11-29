import Status from "./Status";
import Sidebar from "./Sidebar";
import Info from "./Info";
import Summary from "./Summary";

function Section() {
    return (
        <section className={"container mt-2"}>
            <div className={"row"}>
                <div className={"col-xl-10"}>
                    <Status/>
                    <Info/>
                    <Summary/>
                </div>
                <div className={"col-xl-2"}>
                    <Sidebar/>
                </div>
            </div>
        </section>
    );
}

export default Section;
