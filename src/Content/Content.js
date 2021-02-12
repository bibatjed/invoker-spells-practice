import { useState, useRef } from "react";

import OrbInput from "../common/OrbInput/OrbInput";

//functions
import useKey from "../helpers/useKey";

//IMAGES
import QuasIcon from "../images/quas_icon.png";
import WexIcon from "../images/wex_icon.png";
import ExortIcon from "../images/exort_icon.png";
import BlankIcon from "../images/dota2_icon.jpg";

//CSS

const CheckIconBaseOnKey = (key) => {
  switch (key) {
    case "q":
      return QuasIcon;
    case "w":
      return WexIcon;
    case "e":
      return ExortIcon;
    default:
      return;
  }
};

function Content() {
  const [currentSkillSet, setCurrentSKillSet] = useState([
    BlankIcon,
    BlankIcon,
    BlankIcon,
  ]);

  useKey(["KeyQ", "KeyW", "KeyE"], (event) => {
    setCurrentSKillSet((currentSkillSetArray) => [
      ...currentSkillSetArray.slice(1),
      CheckIconBaseOnKey(event.key),
    ]);
  });

  console.log(currentSkillSet)

  return (
    <div className="skillsSection">
      <OrbInput image={currentSkillSet[0]} />
      <OrbInput image={currentSkillSet[1]} />
      <OrbInput image={currentSkillSet[2]} />
    </div>
  );
}

export default Content;
