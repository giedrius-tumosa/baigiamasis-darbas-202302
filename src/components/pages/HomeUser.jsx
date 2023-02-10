import QuestionList from "../questions/QuestionsList";
import AnswerContext from "../../store/AnswerContext";
import { useContext, useEffect } from "react";
import Filter from "../filter/Filter";

const HomeUser = () => {
  const { answers, loadingAnswers, getAnswers } = useContext(AnswerContext);

  useEffect(() => {
    getAnswers();
  }, []);

  return (
    <>
      <h2>HomeUser</h2>
      <Filter />
      <QuestionList />
    </>
  );
};

export default HomeUser;
