
import BoxInput from '../common/BoxInput/BoxInput';

//IMAGES
import QuasIcon from '../images/quas_icon.png';
import WexIcon from '../images/wex_icon.png';
import ExortIcon from '../images/exort_icon.png';
import BlankIcon from '../images/dota2_icon.jpg'
import InvokeIcon from '../images/invoke_icon.png'

//CSS
import './SkillsSection.css';

function SkillsSection() {
  return (
      <div className="skillsSection">
        <BoxInput image={QuasIcon} hotkey="Q"/>
        <BoxInput image={WexIcon} hotkey="W"/>
        <BoxInput image={ExortIcon} hotkey="E"/>
        <BoxInput image={BlankIcon} hotkey="D"/>
        <BoxInput image={BlankIcon} hotkey="F"/>
        <BoxInput image={InvokeIcon} hotkey="R"/>
      </div>
  );
}

export default SkillsSection;
