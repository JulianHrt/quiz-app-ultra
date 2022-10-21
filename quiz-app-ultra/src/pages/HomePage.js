import Card from "../components/Card";

export default function HomePage({ cards }) {
  return (
    <ul className="card-list">
      {cards.map((card) => {
        return (
          <Card
            question={card.question}
            answer={card.answer}
            tags={card.tags}
            key={card.id}
          />
        );
      })}
    </ul>
  );
}
