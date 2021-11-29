import "../assets/stylesheets/Keypad.css"
import {callControllers} from "../data/callControllers";
import {phoneController} from "../data/phoneController";

function Keypad() {
    let microphone = true;
    let keypad = [];
    for (let i = 1; i <= 9; i++) {
        if (i === 9) {
            keypad.push(i)
            keypad.push("*")
            keypad.push(0)
            keypad.push("#")
        } else {
            keypad.push(i)
        }

    }

    return (
        <div className={"keypad my-2"}>
            <div className={"call-control"}>
                {
                    callControllers.map((callControllers) =>
                        <div className={"col-3 call-control-button"} key={callControllers.id}>
                            <button className={"btn mx-1 btn-dark"} title={callControllers.title}
                                    onClick={() => console.log(callControllers.data)}>
                                <i className={callControllers.icon}/>
                            </button>
                        </div>
                    )
                }
            </div>
            <div className={"row numbers my-1"}>
                {
                    keypad.map((key, i) =>
                        <div className={"col-4 number-buttons-container"} key={i}>
                            <button className={"btn number-buttons"} onClick={() => console.log(key)}>{key}</button>
                        </div>
                    )
                }
            </div>
            <div className={"row microphone-control my-3"}>
                <button className={"btn btn-dark microphone-control-button"}>
                    <i className={microphone ? "fas fa-microphone" : "fas fa-microphone-slash"}/>
                </button>
            </div>
            <div className={"row phone-control"}>
                {
                    phoneController.map((phoneController) =>
                        <button className={"btn btn-dark btn-block phone-control-button mb-2"}
                                onClick={() => console.log()} key={phoneController.id}>
                            <i className={phoneController.icon}/>
                            <span>{phoneController.title}</span>
                        </button>
                    )
                }
            </div>
        </div>
    );
}

export default Keypad;
