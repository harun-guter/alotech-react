import './assets/stylesheets/App.scss';
import Header from "./components/Header";
import Section from "./components/Section";
import {MainContext} from "./Context";
import {useState} from "react";

function App() {

    const [agentStatus, setAgentStatus] = useState(null);
    const [time, setTime] = useState("00:00:00");

    const data = {
        agentStatus, setAgentStatus,
        time, setTime,
    }

    return (
        <MainContext.Provider value={data}>
            <Header/>
            <Section/>
        </MainContext.Provider>
    );
}

export default App;
