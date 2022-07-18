import {useState,useContext,useEffect} from 'react';
import FeedbackContext from '../context/FeedbackContext';

function RatingSelect({select}) {
    const {feedbackEdit}=useContext(FeedbackContext)
    const [selected,setSelected]=useState(5)

    const handleChange=(e)=>{
         setSelected(+e.currentTarget.value)
         select(+e.currentTarget.value)  
    }
    useEffect(()=>{
        if(feedbackEdit.edit ===true){
        setSelected(feedbackEdit.item.rating)
        }

    },[feedbackEdit])
  return (
    <ul className="rating">
        <li>
            <input type="radio" name="rating" value='1' id="num1" checked={selected===1} onChange={handleChange} />
            <label htmlFor="num1">1</label>
        </li>
        <li>
            <input type="radio" name="rating" value='2' id="num2" checked={selected===2} onChange={handleChange}/>
            <label htmlFor="num2">2</label>
        </li>
        <li>
            <input type="radio" name="rating" value='3' id="num3" checked={selected===3}onChange={handleChange}/>
            <label htmlFor="num3">3</label>
        </li>
        <li>
            <input type="radio" name="rating" value='4' id="num4" checked={selected===4} onChange={handleChange}/>
            <label htmlFor="num4">4</label>
        </li>
        <li>
            <input type="radio" name="rating" value='5' id="num5"checked={selected===5} onChange={handleChange}/>
            <label htmlFor="num5">5</label>
        </li>
    </ul>
  )
}
RatingSelect.defaultProps={
    select:5,

}

export default RatingSelect