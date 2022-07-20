import { createContext,useState ,useEffect} from "react"; 
import {v4 as uuid4} from 'uuid'

const  FeedbackContext=createContext()



export const FeedbackProvider=({children})=>{
    const [feedback,setFeedback]=useState([])
    //useEffect
    useEffect(()=>{
      getFeedback()
    },[])


    //fetch data from api
    const getFeedback=async()=>{
      const response=await fetch(`/feedback?_sort=id&_order=desc`)
      const data=await response.json()
      setFeedback(data)
    }  
    const [feedbackEdit,setFeedbackEdit]=useState({
      item:{},
      edit:false
    })
    const deleteFeedback=async(id)=>{
        await fetch(`http://localhost:3001/feedback/${id}`,{
            method:'DELETE'
        })
        setFeedback(feedback.filter((item)=>item.id!==id))
       
      }
      const addFeedback=async(newFeedback)=>{
        const response=await fetch(`/feedback`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(newFeedback)
        })
        const data=await response.json()

      
        setFeedback([data,...feedback])
      }
      const editFeedback=(item)=>{
        setFeedbackEdit({
          item,
          edit:true
        })
      }
      const updateFeedback=async(id,updatedFeedback)=>{
        const response=await fetch(`/feedback/${id}`,{
          method:"PUT",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(updatedFeedback)

        })
        const data=await response.json()
        //update feedback with id and persit other feedbacks

        setFeedback(feedback.map((item)=>item.id===id? data:item))
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

