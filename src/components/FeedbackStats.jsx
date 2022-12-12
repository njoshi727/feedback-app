import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackStats() {
  
  const {feedbacks} = useContext(FeedbackContext)
  
    // calculating ratings avg
  let average =
    feedbacks.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedbacks.length;

  // fixing rating average to one decimal place only
  // in case average is x.0 , change it to x
  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className='feedback-stats'>
      <h4>{feedbacks.length} Reviews</h4>
      <h4> Average rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}


export default FeedbackStats;
