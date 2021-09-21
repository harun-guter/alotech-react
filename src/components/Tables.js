import '../assets/stylesheets/Tables.css';

const previousCalls = [
    {
        caller: "05555555555",
        called: "05555555555",
        queue: "Support",
        callDate: "2020-02-12 17:02:42",
        startDate: "2020-02-12 17:02:42",
        finishDate: "2020-02-12 17:02:42",
        duration: "00:00:00",
    },
    {
        caller: "05555555555",
        called: "05555555555",
        queue: "Support",
        callDate: "2020-02-12 17:02:42",
        startDate: "2020-02-12 17:02:42",
        finishDate: "2020-02-12 17:02:42",
        duration: "00:00:00",
    },
    {
        caller: "05555555555",
        called: "05555555555",
        queue: "Sales",
        callDate: "2020-02-12 17:02:42",
        startDate: "2020-02-12 17:02:42",
        finishDate: "2020-02-12 17:02:42",
        duration: "00:00:00",
    },
    {
        caller: "05555555555",
        called: "05555555555",
        queue: "Support",
        callDate: "2020-02-12 17:02:42",
        startDate: "2020-02-12 17:02:42",
        finishDate: "2020-02-12 17:02:42",
        duration: "00:00:00",
    },
    {
        caller: "05555555555",
        called: "05555555555",
        queue: "Sales",
        callDate: "2020-02-12 17:02:42",
        startDate: "2020-02-12 17:02:42",
        finishDate: "2020-02-12 17:02:42",
        duration: "00:00:00",
    },
    {
        caller: "05555555555",
        called: "05555555555",
        queue: "Sales",
        callDate: "2020-02-12 17:02:42",
        startDate: "2020-02-12 17:02:42",
        finishDate: "2020-02-12 17:02:42",
        duration: "00:00:00",
    },
    {
        caller: "05555555555",
        called: "05555555555",
        queue: "Sales",
        callDate: "2020-02-12 17:02:42",
        startDate: "2020-02-12 17:02:42",
        finishDate: "2020-02-12 17:02:42",
        duration: "00:00:00",
    },
    {
        caller: "05555555555",
        called: "05555555555",
        queue: "Sales",
        callDate: "2020-02-12 17:02:42",
        startDate: "2020-02-12 17:02:42",
        finishDate: "2020-02-12 17:02:42",
        duration: "00:00:00",
    },
];

function Tables() {
    return (
        <div className={"tables p-3 mt-3"}>
            <div className={"tabs px-2"}>
                <button className={"btn btn-light"}>Active Calls</button>
                <button className={"btn btn-light"}>Performance</button>
                <button className={"btn btn-light active"}>Previous Calls</button>
                <button className={"btn btn-light"}>Previous Chats</button>
                <button className={"btn btn-light"}>Queues</button>
                <button className={"btn btn-light"}>Team</button>
                <button className={"btn btn-light"}>Messages</button>
                <button className={"btn btn-light"}>Evaluations</button>
            </div>

            <table className={"table table-striped table-bordered mt-3"}>
                <thead className={"table-header"}>
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
                    previousCalls.map((call, key) =>
                        <tr key={key}>
                            <td>{call.caller}</td>
                            <td>{call.called}</td>
                            <td>{call.queue}</td>
                            <td>{call.callDate}</td>
                            <td>{call.startDate}</td>
                            <td>{call.finishDate}</td>
                            <td>{call.duration}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default Tables;
