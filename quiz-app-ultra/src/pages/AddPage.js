import "./addPage.css";

export default function AddPage({ appendCard, setActive }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("hierkommen die Tag" + data.tags);

    appendCard(data.question, data.answer, data.tags);

    setActive("homePage");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="question">
        Question
        <textarea id="question" name="question"></textarea>
      </label>
      <label for="answer">
        Answer
        <textarea id="answer" name="answer"></textarea>
      </label>
      <label for="tags">
        Tags
        <textarea id="tags" name="tags"></textarea>
      </label>
      <label for="submit">
        <button className="button" type="submit" id="submit">
          submit
        </button>
      </label>
    </form>
  );
}
