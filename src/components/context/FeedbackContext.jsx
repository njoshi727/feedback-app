import { createContext, useState, useEffect} from "react";
//import feedbacksData from "../../Data/feedbackData.js";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading,setIsLoading] = useState(true)
  const [feedbacks, setFeedback] = useState([]);
  const [editedFeedbackInfo , setEditedFeedbackInfo] = useState({
    item : {},
    edit : false,
  })
  
  useEffect(()=>{
    fetchFeedback();
  },[])

  const fetchFeedback = async () =>{
    const response = await fetch("http://localhost:5000/feedbacks");
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }
  
  const deleteFeedback = async (feedbackId) => {
    await fetch(`/feedbacks/${feedbackId}`,{method : 'DELETE'})
    setFeedback(feedbacks.filter((feedback) => feedback.id !== feedbackId));
  };

  const addFeedback = async (newFeedback) => {

    const response = await fetch("/feedbacks",{
      method: "POST",
      headers : {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })

    const addedFeedback = await response.json();

    setFeedback([addedFeedback, ...feedbacks]);
  };

  const updateFeedback = async (id , newFeedback) =>{
    
    const response = await fetch(`/feedbacks/${id}`,{
      method : 'PUT',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(newFeedback)
    });

    const updatedFeedback = await response.json()

    setFeedback(feedbacks.map((feedback)=>{
      return feedback.id === id ? {...feedback,...updatedFeedback} : feedback
    }))

    setEditedFeedbackInfo({
      item : {},
      edit : false
    })    
  }

  // Action when edit button on a particular feedback is clicked !
  const editFeedback = (feedbackItem)=>{
    setEditedFeedbackInfo({
      item : feedbackItem,
      edit : true
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        editedFeedbackInfo,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
