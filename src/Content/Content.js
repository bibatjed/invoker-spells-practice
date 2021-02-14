import { useState, useRef } from "react";

import OrbInput from "../common/OrbInput/OrbInput";

//functions
import useKey from "../helpers/useKey";

//
import { combinationSkills } from "../helpers/combinationSkill";

//IMAGES
import QuasIcon from "../images/quas_icon.png";
import WexIcon from "../images/wex_icon.png";
import ExortIcon from "../images/exort_icon.png";
import BlankIcon from "../images/dota2_icon.jpg";

//CSS
import "./Content.css";

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
  const [currentSkillSetImage, setCurrentSKillSetImage] = useState([
    BlankIcon,
    BlankIcon,
    BlankIcon,
  ]);

  const [currentSkillSet, setCurrentSKillSet] = useState([]);

  const [currentSkillQuest, setCurrentSKillQuest] = useState({
    img: BlankIcon,
    combination: [],
  });

  const [currentSkillCollection, setSkillCollection] = useState(
    combinationSkills
  );

  const [isGameStarted, setGameStarted] = useState(false);

  const stateRef = useRef();

  stateRef.current = {
    currentSkillSet,
    currentSkillQuest,
    isGameStarted,
    currentSkillCollection,
  };

  const resetCombinationSkill = () => {
    console.log(combinationSkills);
    setSkillCollection(combinationSkills);
  };

  const pickRandomSkill = () => {
    const { currentSkillCollection } = stateRef.current;
    const randomIndex = Math.floor(
      Math.random() * currentSkillCollection.length
    );
    const pickedSkill = currentSkillCollection[randomIndex];

    const newSkillSet = [...currentSkillCollection];
    newSkillSet.splice(randomIndex, 1);

    setSkillCollection(newSkillSet);
    return pickedSkill;
  };

  useKey(["KeyQ", "KeyW", "KeyE"], (event) => {
    setCurrentSKillSetImage((currentSkillSetImageArray) => [
      ...currentSkillSetImageArray.slice(1),
      CheckIconBaseOnKey(event.key),
    ]);

    setCurrentSKillSet((currentSkillSetArray) => [
      ...(currentSkillSetArray.length === 3
        ? currentSkillSetArray.slice(1, 3)
        : currentSkillSetArray),
      event.key,
    ]);
  });

  useKey(["Enter"], () => {
    if (!stateRef.current.isGameStarted) {
      setGameStarted((currentGameStartedStatus) => !currentGameStartedStatus);

      resetCombinationSkill();
      setCurrentSKillQuest(() => pickRandomSkill());
    }
  });

  useKey(["KeyR"], () => {
    const {
      currentSkillQuest,
      currentSkillSet,
      isGameStarted,
      currentSkillCollection,
    } = stateRef.current;
    if (currentSkillCollection.length === 0) {
      setGameStarted((currentGameStartedStatus) => !currentGameStartedStatus);
      return;
    }

    if (
      isGameStarted &&
      currentSkillQuest.combination.includes(currentSkillSet.join(""))
    )
      setCurrentSKillQuest(() => pickRandomSkill());
  });

  return (
    <div className="Content">
      <div className="Instructions">
        <div className="Instructions__Title">
          <span>Instructions</span>
        </div>
        <div className="Instructions__SkillsQuest">
          {!isGameStarted ? (
            <span>Press Enter to Start the Game</span>
          ) : (
            <img src={currentSkillQuest.img}></img>
          )}
        </div>
      </div>
      <div className="Content__Orb">
        <OrbInput image={currentSkillSetImage[0]} />
        <OrbInput image={currentSkillSetImage[1]} />
        <OrbInput image={currentSkillSetImage[2]} />
      </div>
    </div>
  );
}

export default Content;
