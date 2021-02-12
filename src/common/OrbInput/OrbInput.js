import "./OrbInput.css";

function OrbInput({ image = "" }) {
  return (
    <div className="orb">
      <img className="orb__image" src={image}></img>
    </div>
  );
}

export default OrbInput;
