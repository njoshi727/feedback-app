import { useState } from "react"

function FeedbackItem() {
  
  const [rating,setRating] = useState(7)
  const [feedbackText,setFeedbackText] = useState("This is default feedback text")

  const updateRating = ()=>{
    setRating((prev)=>{
        return prev+1
    })
  }

  return (
    <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display">{feedbackText}</div>
        <button onClick={updateRating}> update rating by 1 </button>
    </div>
  )
}

export default FeedbackItem