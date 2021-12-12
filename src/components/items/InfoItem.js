import "../../assets/stylesheets/InfoItem.scss";

function InfoItem({info}) {
    return (
        <div className="col-lg-3 col-xl-3 col-6">
            <div className="info-item">
                <i className={info.icon} style={{color: info.color}}/>
                <span>{info.title} : <b>{info.count}</b></span>
            </div>
        </div>
    );
}

export default InfoItem;
