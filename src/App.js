import './assets/stylesheets/App.scss';
import Header from "./components/Header";
import Section from "./components/Section";
import {MainContext} from "./Context";
import {useState} from "react";

function App() {

    const [agentStatus, setAgentStatus] = useState(null);

    const data = {
        agentStatus, setAgentStatus,
    }

    return (
        <MainContext.Provider value={data}>
            <Header/>
            <Section/>
        </MainContext.Provider>
    );
}

export default App;
