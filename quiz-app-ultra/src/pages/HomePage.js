import Card from "../components/Card";

export default function HomePage({ cards, deleteCard, toggleBookmark }) {
  return (
    <ul className="card-list">
      {cards.map((card, index) => {
        return (
          <Card
            question={card.question}
            answer={card.answer}
            tags={card.tags}
            key={card.question + index}
            deleteCard={deleteCard}
            isBookmarked={card.isBookmarked}
            toggleBookmark={toggleBookmark}
          />
        );
      })}
    </ul>
  );
}
