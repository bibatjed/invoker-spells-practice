import logo from "./logo.svg";
import "./App.css";

import SkillsSection from "./SkillsSection/SkillsSection";

//img
import InvokerHero from "./images/floating_invoker.png";
import Content from "./Content/Content";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="Container__Title">
          <h1>Invoker Skills</h1>
          <div className="Container__Title--Image">
            <img src={InvokerHero}></img>
          </div>
        </div>
        <Content/>
        <SkillsSection/>
      </div>

    </div>
  );
}

export default App;
