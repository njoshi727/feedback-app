import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import feedbacks from "./Data/feedbackData";

function App(){

    return (
      <>
        <Header></Header>
        <div className='container'>
          <FeedbackList feedbacks = {feedbacks}></FeedbackList>
        </div>
      </>
    );
}

export default App;