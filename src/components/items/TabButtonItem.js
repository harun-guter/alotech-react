import "../../assets/stylesheets/TabButtonItem.scss";

function TabButtonItem({summaryTabs}) {
    return (
        <li className={summaryTabs.id === 3 ? "active-tab" : null} onClick={() => console.log(summaryTabs.id)}>
            {summaryTabs.title}
        </li>
    );
}

export default TabButtonItem;
