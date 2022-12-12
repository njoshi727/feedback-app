
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { FeedbackProvider } from "./components/context/FeedbackContext";
import React from "react";

function App() {

  return (
    <React.StrictMode>
      <FeedbackProvider>
        <Header />
        <div className='container'>
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
        </div>
      </FeedbackProvider>
    </React.StrictMode>
  );
}

export default App;
