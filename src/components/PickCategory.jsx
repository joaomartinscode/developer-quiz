import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import Category from "../img/category.svg";

import "./PickCategory.scss";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div id="category">
      <h2>Choose a category</h2>
      <p>The questions will refer to one of the languages below:</p>
      {quizState.questions.map((question) => (
        <button
          onClick={() => chooseCategoryAndReorderQuestions(question.category)}
          key={question.category}
        >
          {question.category}
        </button>
      ))}

      <img src={Category} alt="Quiz Category" />
    </div>
  );
};

export default PickCategory;
