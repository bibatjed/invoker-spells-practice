import './BoxInput.css';

function BoxInput({ image = "", hotkey = "" }) {
  return (
    <div className="box">
      <div className='box__hotkey'>
        <span className="box__hotkey--span">{hotkey}</span>
      </div>
      <img className="box__image" src={image}></img>
    </div>
  );
}

export default BoxInput;
