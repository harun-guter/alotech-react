import "../assets/stylesheets/SoftPhone.scss";

function SoftPhone() {
    let softPhone = true;
    return (
        <span className={"softphone mb-3"}>
            Softphone:
            {
                softPhone ?
                    <i className={"fas fa-check"} style={{color: "#2ecc71"}}/> :
                    <i className="fas fa-times" style={{color: "#c0392b"}}/>
            }
        </span>
    );
}

export default SoftPhone;
