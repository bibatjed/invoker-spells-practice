import { useState, useRef } from "react";

import BoxInput from "../common/BoxInput/BoxInput";

//functions
import useKey from "../helpers/useKey";

import { combinationSkills } from "../helpers/combinationSkill";

//IMAGES
import QuasIcon from "../images/quas_icon.png";
import WexIcon from "../images/wex_icon.png";
import ExortIcon from "../images/exort_icon.png";
import BlankIcon from "../images/dota2_icon.jpg";
import InvokeIcon from "../images/invoke_icon.png";

//CSS
import "./SkillsSection.css";

function SkillsSection() {
  const [currentSkillSet, setCurrentSKillSet] = useState([]);

  const [currentInvokeSkill, setCurrentInvokeSkill] = useState([
    BlankIcon,
    BlankIcon,
  ]);

  useKey(["KeyQ", "KeyW", "KeyE"], (event) => {
    setCurrentSKillSet((currentSkillSetArray) => [
      ...(currentSkillSetArray.length === 3
        ? currentSkillSetArray.slice(1, 3)
        : currentSkillSetArray),
      event.key,
    ]);
  });

  useKey(["KeyR"], () => {
    const findCombinationSKillResult = combinationSkills.find(
      ({ combination }) => combination.includes(stateRef.current[0].join(''))
    );

    if (findCombinationSKillResult && stateRef.current[1][0] !== findCombinationSKillResult.img) {
      setCurrentInvokeSkill((updatedInvokeSkill) => [
        findCombinationSKillResult.img,
        updatedInvokeSkill[0],
      ]);
    }
  });

  const stateRef = useRef();

  stateRef.current = [currentSkillSet, currentInvokeSkill];

  return (
    <div className="skillsSection">
      <BoxInput image={QuasIcon} hotkey="Q" />
      <BoxInput image={WexIcon} hotkey="W" />
      <BoxInput image={ExortIcon} hotkey="E" />
      <BoxInput image={currentInvokeSkill[0]} hotkey="D" />
      <BoxInput image={currentInvokeSkill[1]} hotkey="F" />
      <BoxInput image={InvokeIcon} hotkey="R" />
    </div>
  );
}

export default SkillsSection;
