import { createContext } from "react";

const ENDPOINT_ANSWERS = "http://localhost:5000/answers";


const AnswerContext = createContext();

const AnswerProvider = ({ children }) => {

  return (
    <AnswerContext.Provider value={{

    }}>
      {children}
    </AnswerContext.Provider>
  );

};

export { AnswerProvider };
export default AnswerContext;