import Bookmark from "../Bookmark";
import Button from "../Button";
import "./Card.css";
import { useState } from "react";
import ButtonDelete from "../ButtonDelete";

export default function Card({ question, answer, tags, deleteCard }) {
  const [showAnswer, setShowAnswer] = useState(true);
  return (
    <li className="card-list__item">
      <article className="card">
        <h2 className="card__question">{question}</h2>
        <Button
          onClick={() => {
            setShowAnswer((state) => {
              return !state;
            });
          }}
          text={showAnswer ? "Show answer" : "Hide answer"}
        />
        <p className={showAnswer ? "card__answer" : "card__answer--active"}>
          {answer}
        </p>
        <ul className="card__tag-list">
          {tags.map((tag) => {
            return <li className="card__tag-list-item">{tag}</li>;
          })}
        </ul>
        <Bookmark />
        <ButtonDelete
          onClick={() => {
            deleteCard(question);
          }}
        />
      </article>
    </li>
  );
}
