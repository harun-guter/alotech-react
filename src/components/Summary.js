import "../assets/stylesheets/Summary.scss"
import TabButtonItem from "./items/TabButtonItem";
import {summaryTabs} from "../data/summaryTabs";
import TableItem from "./items/TableItem";

function Summary() {
    return (
        <>
            <div className={"summary-tab-buttons-container"}>
                <ul className={"summary-tab-buttons"}>
                {
                    summaryTabs.map((summaryTabs) =>
                        <TabButtonItem key={summaryTabs.id} summaryTabs={summaryTabs}/>
                    )
                }
                </ul>
            </div>
            <div className={"summary-content-container mb-2"}>
                <TableItem/>
            </div>
        </>
    );
}

export default Summary;
