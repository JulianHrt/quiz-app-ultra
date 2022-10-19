import "./global.css";
import Header from "./components/Header/";
import Card from "./components/Card";
import Navbar from "./components/Navbar/";

function App() {
  return (
    <div>
      <Header />
      <main>
        <ul className="card-list">
          <Card
            question="example Question"
            answer="example answer"
            tag="#tag"
          />
        </ul>
      </main>
      <footer>
        <Navbar />
      </footer>
    </div>
  );
}

export default App;
