import "../../assets/stylesheets/TableItem.scss";
import {summaries} from "../../data/summaries";

function TableItem() {
    return (
        <table className={"table table-bordered table-hover"}>
            <thead>
            <tr>
                <th scope={"col"}>Caller</th>
                <th scope={"col"}>Called</th>
                <th scope={"col"}>Queue</th>
                <th scope={"col"}>Call Date</th>
                <th scope={"col"}>Start Date</th>
                <th scope={"col"}>Finish Date</th>
                <th scope={"col"}>Duration</th>
            </tr>
            </thead>
            <tbody>
            {
                summaries.map((summary) =>
                    <tr key={summary.id}>
                        <td>{summary.caller}</td>
                        <td>{summary.called}</td>
                        <td>{summary.queue}</td>
                        <td>{summary.callDate}</td>
                        <td>{summary.startDate}</td>
                        <td>{summary.finishDate}</td>
                        <td>{summary.duration}</td>
                    </tr>
                )
            }
            </tbody>
        </table>
    );
}

export default TableItem;
