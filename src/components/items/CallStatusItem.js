import "../../assets/stylesheets/CallStatusItem.css";

function CallStatusItem({status}) {
    return (
        <div className={"col-xl-2 col-lg-4 col-12"}>
            <div className={"call-status-item my-1 disabled-call-status"}
                 style={{borderColor: status.color}}>  {/*remove disabled-call-status*/}
                <i className={status.icon + " mx-xl-2 mx-5"} style={{color: status.color}}/>
                <span>{status.title}</span>
            </div>
        </div>
    );
}

export default CallStatusItem;
