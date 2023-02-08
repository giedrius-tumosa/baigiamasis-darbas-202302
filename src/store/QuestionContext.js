import { createContext } from "react";

const ENDPOINT_QUESTIONS = "http://localhost:5000/questions";


const QuestionContext = createContext();

const QuestionProvider = ({ children }) => {

  return (
    <QuestionContext.Provider value={{

    }}>
      {children}
    </QuestionContext.Provider>
  );

};

export { QuestionProvider };
export default QuestionContext;