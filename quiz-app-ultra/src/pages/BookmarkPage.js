import Card from "../components/Card";

export default function BookmarkPage({ cards, deleteCard, toggleBookmark }) {
  const filteredArray = cards.filter((card) => {
    return card.isBookmarked === true;
  });

  console.log(filteredArray);

  return (
    <ul className="card-list">
      {filteredArray.map((card, index) => {
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
