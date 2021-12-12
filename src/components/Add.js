import { useState } from "react"
import { useDispatch } from "react"
import { addingtodo } from "../Redux/action"




const Add =()=>{
    const [text,setText]= useState('')
     const dispatch = useDispatch()
    return(
        <div>
            <input value={text} onChange={(e)=>setText(e.target.value)}></input>
          <button onClick={() => {
              {dispatch(addingtodo({ id: Math.random(), task: text, done: false }));setText("")}}> add</button>
           
        </div>
    )
    }
export default Add