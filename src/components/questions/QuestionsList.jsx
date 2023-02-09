import { useContext, useEffect } from "react";
import QuestionContext from "../../store/QuestionContext";
import QuestionSnippet from "../questions/QuestionSnippet";

const QuestionsList = () => {
  const { questions, loadingQuestions, getQuestions } = useContext(QuestionContext);

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      <section style={{ display: "flex", gap: "1rem", flexDirection: "column", padding: "1rem" }}>
        <p>{loadingQuestions && "Loading..."}</p>
        {!loadingQuestions &&
          questions.map((question) => <QuestionSnippet key={question.id} question={question} />)}
      </section>
    </>
  );
};

export default QuestionsList;
