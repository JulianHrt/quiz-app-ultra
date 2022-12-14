import "./global.css";
import Header from "./components/Header/";
import Navbar from "./components/Navbar/";
import { useEffect, useState } from "react";
import AddPage from "./pages/AddPage.js";
import BookmarkPage from "./pages/BookmarkPage.js";
import ProfilPage from "./pages/ProfilPage.js";
import HomePage from "./pages/HomePage.js";
import { myCardArray } from "./components/utils/Array.js";

function App() {
  const [isActive, setActive] = useState("homePage");
  const [isCards, setCards] = useState(() => {
    return JSON.parse(localStorage.getItem("yourCards")) ?? myCardArray;
  });

  useEffect(() => {
    localStorage.setItem("yourCards", JSON.stringify(isCards));
  }, [isCards]);

  function appendCard(questionInput, answerInput, tagsInput) {
    setCards((alterWert) => {
      const tagsArray = tagsInput.split(" ");
      const neuerWert = [
        ...alterWert,
        {
          question: questionInput,
          answer: answerInput,
          tags: tagsArray,
        },
      ];
      return neuerWert;
    });
  }

  function deleteCard(key) {
    console.log(key);
    setCards((altesArray) => {
      const neuesArray = altesArray.filter((item) => item.question !== key);

      return neuesArray;
    });
  }

  function toggleBookmark(cardID) {
    const newArray = isCards.map((card) => {
      if (card.question === cardID) {
        return {
          ...card,
          isBookmarked: !card.isBookmarked,
        };
      } else {
        return card;
      }
    });
    setCards(newArray);
  }

  return (
    <div>
      {<Header />}
      <main>
        {isActive === "homePage" && (
          <HomePage
            cards={isCards}
            deleteCard={deleteCard}
            toggleBookmark={toggleBookmark}
          />
        )}
        {isActive === "bookmarkPage" && (
          <BookmarkPage
            cards={isCards}
            deleteCard={deleteCard}
            toggleBookmark={toggleBookmark}
          />
        )}
        {isActive === "addPage" && (
          <AddPage appendCard={appendCard} setActive={setActive} />
        )}
        {isActive === "profilPage" && <ProfilPage />}
      </main>
      <footer>
        <Navbar isActive={isActive} setActive={setActive} />
      </footer>
    </div>
  );
}

export default App;
