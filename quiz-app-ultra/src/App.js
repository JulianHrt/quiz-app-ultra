import "./global.css";
import Header from "./components/Header/";
import Card from "./components/Card";
import Navbar from "./components/Navbar/";

const cards = [
  { id: 1, question: "Frage?", answer: "Antwort!", tags: [1, 2, 3] },
  { id: 2, question: "Frage2?", answer: "Antwort2!", tags: [1, 2, 3] },
  { id: 3, question: "Frage3?", answer: "Antwort3!", tags: [1, 2, 3] },
  { id: 4, question: "Frage4?", answer: "Antwort4!", tags: [1, 2, 3] },
  { id: 5, question: "Frage5?", answer: "Antwort5!", tags: [1, 2, 3] },
];

function App() {
  return (
    <div>
      <Header />
      <main>
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
      </main>
      <footer>
        <Navbar />
      </footer>
    </div>
  );
}

export default App;
