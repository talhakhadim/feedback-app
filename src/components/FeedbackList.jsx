import FeedbackItem from "./FeedbackItem"
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"
function FeedbackList() {
  const {feedback}=useContext(FeedbackContext)

  if(!feedback || feedback.length===0){
    return (
      <div>
      <p>No feedback given</p>
      </div>
    )
  }
  return (
      <>
      {
        feedback.map((item)=>{
          return < FeedbackItem 
          key={item.id} 
          item={item}/>
        })
      }
      </>
  )
}

export default FeedbackList