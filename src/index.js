import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from "./store/UserContext";
import { QuestionProvider } from "./store/QuestionContext";
import { AnswerProvider } from "./store/AnswerContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <QuestionProvider>
        <AnswerProvider>
          <App />
        </AnswerProvider>
      </QuestionProvider>
    </UserProvider>
  </React.StrictMode>
);
