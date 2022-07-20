import {useState,useContext,useEffect} from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {
    const {addFeedback,feedbackEdit,updateFeedback} =useContext(FeedbackContext)
    const [text,setText]=useState('');
    const [btnDisabled,setBtnDisabled]=useState(true);
    const [message,setMessage]=useState('');
    const [rating,setRating]=useState(5)
    useEffect(()=>{
      if(feedbackEdit.edit===true){
        setBtnDisabled(false);
        setText(feedbackEdit.item.text);
        setRating(feedbackEdit.item.rating)
      }

    },[feedbackEdit])
    const handleTextChange=(e)=>{
        
         if(text ===''){
        setBtnDisabled(true)
        setMessage(null)
    }else if(text !=='' && text.trim().length<=10){
        setBtnDisabled(true)
        setMessage('Text should be atleast 10 characters long')


    }else{
        setMessage(null)
        setBtnDisabled(false)
    }
        setText(e.target.value)

    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(text.trim().length>10){
        const newFeedback={
          text,
          rating
        }
        if(feedbackEdit.edit===true){
          updateFeedback(feedbackEdit.item.id,newFeedback)
          setText('')
        }else{
          addFeedback(newFeedback)
        setText('')
        }
        
       
      }
    }
  return (
    <Card>
      <form onSubmit={handleSubmit}>

        <h4>Would you like to give us a review?</h4>
        <RatingSelect select={(rating)=>setRating(rating)}/>
      <div className="input-group">
        <input type="text" onChange={handleTextChange} value={text} 
        placeholder='write a review' />

        <Button version='secondary' type='submit' 
         isDisabled={btnDisabled}>Send</Button>

      </div>
         {message && <div className='message'>{message}</div>}
         </form>


    </Card>
  )
}

export default FeedbackForm