import Bookmark from "../Bookmark";
import Button from "../Button";
import "./Card.css";

export default function Card({ question, answer, tag }) {
  return (
    <li className="card-list__item">
      <article className="card">
        <h2 className="card__question">{question}</h2>
        <Button />
        <p className="card__answer">{answer}</p>
        <ul className="card__tag-list">
          <li className="card__tag-list-item">{tag}</li>
        </ul>
        <Bookmark />
      </article>
    </li>
  );
}
