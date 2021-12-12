import { useDispatch } from "react-redux"
import { deletingtodo, doneto } from "../Redux/action"


const Todo =({el})=>{
    const dispatch= useDispatch()
        <div>
            <ul>
      <li>{el.task}</li>
      <button onClick={()=>dispatch(deletingtodo(todo.id)) }>delete</button>
      <buttton onClick={()=>dispatch(doneto(todo.id))}>done</buttton>
      <button>edit</button>
        </ul>

        </div>
    
}
export default Todo



