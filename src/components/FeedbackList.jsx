import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedbacks }) {
  return (
    <div className='feedback-list'>
      {feedbacks.map((feedback) => (
        <FeedbackItem key={feedback.id} feedback={feedback} />
      ))}
    </div>
  );
}

export default FeedbackList;
