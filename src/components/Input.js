import "../assets/stylesheets/Input.css";

function Input() {
    return (
        <div className={"input px-2"}>
            <input id={"phone-number"} className={"form-control"} placeholder={"Phone number"} maxLength={11}/>
        </div>
    );
}

export default Input;
