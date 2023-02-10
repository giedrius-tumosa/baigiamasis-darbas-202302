import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from "./store/UserContext";
import { QuestionProvider } from "./store/QuestionContext";
import { AnswerProvider } from "./store/AnswerContext";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <QuestionProvider>
          <AnswerProvider>
            <App />
          </AnswerProvider>
        </QuestionProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);


