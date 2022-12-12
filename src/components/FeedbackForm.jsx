import { useState , useContext , useEffect } from "react"
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./shared/Button"
import FeedbackContext from "./context/FeedbackContext"

function FeedbackForm() {
  const [text,setText] = useState('')
  const [rating,setRating] = useState(10)
  const [btnDisabled , setBtnDisabled] = useState(true)
  const [message,setMessage] = useState('')

  const { addFeedback, editedFeedbackInfo, updateFeedback } = useContext(FeedbackContext);

  useEffect(()=>{
    if(editedFeedbackInfo.edit === false)
        return;

    setBtnDisabled(false);
    setRating(editedFeedbackInfo.item.rating);
    setText(editedFeedbackInfo.item.text);
  },[editedFeedbackInfo])

  const handleTextChange = (e)=>{
    if(text === ''){
      setBtnDisabled(true);
      setMessage('')
    }
    else if(text.trim().length < 10){
        setBtnDisabled(true);
        setMessage('Review message should be atleast 10 character')
    }
    else{
        setBtnDisabled(false);
        setMessage('')
    }

    setText(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(text.trim().length >= 10){
        const newFeedback = {
            rating,
            text
        }

        if(editedFeedbackInfo.edit === true){
          updateFeedback(editedFeedbackInfo.item.id,newFeedback)
        }
        else{
          addFeedback(newFeedback)
        }
    }

    setText('')
    setRating(10)
  }


  return (
    <Card>
      <form>
        <h2>How would you rate your service with us ?</h2>
        <RatingSelect rating = {rating} changeRating = {rating => setRating(rating)}/>
        <div className='input-group'>
          <input onChange={handleTextChange} value={text} type='text' placeholder='Write a review' />
          <Button handleOnClick = {handleSubmit} isDisabled = {btnDisabled}>Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm