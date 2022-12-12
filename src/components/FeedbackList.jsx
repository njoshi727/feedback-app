import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";
import Spinner from "./shared/Spinner";

function FeedbackList() {
  
  const {feedbacks, isLoading} = useContext(FeedbackContext)
  
  if(!isLoading && (!feedbacks || feedbacks.length === 0)){
    return <h3>No Feedback!</h3>
  }

  return isLoading ? <Spinner/> : (
    <div className='feedback-list'>
      {feedbacks.map((feedback) => (
        <FeedbackItem key={feedback.id} feedback={feedback}/>
      ))}
    </div>
  )
}

/* FeedbackList.propTypes = {
    feedbacks : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            text : PropTypes.string.isRequired,
            rating : PropTypes.number.isRequired
        })
    ),
} */

export default FeedbackList;
