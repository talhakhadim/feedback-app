import { createContext,useState } from "react"; 
import {v4 as uuid4} from 'uuid'

const  FeedbackContext=createContext()



export const FeedbackProvider=({children})=>{
    const [feedback,setFeedback]=useState([
        {
            id:1,
            text:"this is comming from context api",
            rating:2
        },
        {
            id:2,
            text:"hello ia mama  sjkssk sdkdkd",
            rating:4
        }
    ])
    const [feedbackEdit,setFeedbackEdit]=useState({
      item:{},
      edit:false
    })
    const deleteFeedback=(id)=>{
        setFeedback(feedback.filter((item)=>item.id !==id))
      }
      const addFeedback=(newFeedback)=>{
        newFeedback.id=uuid4()
        setFeedback([newFeedback,...feedback])
      }
      const editFeedback=(item)=>{
        setFeedbackEdit({
          item,
          edit:true
        })
      }
      const updateFeedback=(id,updatedFeedback)=>{
        //update feedback with id and persit other feedbacks
        setFeedback(feedback.map((item)=>item.id===id? {...item,...updatedFeedback}:item))

        
        console.log(id,updatedFeedback)

      }

    return (
    <FeedbackContext.Provider value={{
    feedback,
    feedbackEdit,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback

    }}>
    {children}
    </FeedbackContext.Provider>
    )
}


export default FeedbackContext;

