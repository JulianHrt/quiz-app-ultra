import "./Button.css";

export default function Button({ onClick, text }) {
  return (
    <button className="card__button-answer" type="button" onClick={onClick}>
      {text}
    </button>
  );
}
