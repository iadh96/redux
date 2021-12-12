import { ADDTO,DELETETO,DONETO} from "./types"

const initialState={
    todos:[{id:0, task:"Eat", done:false},
    {id:1, task:"sleep", done:false},
    {id:2, task:"train", done:false},
    {id:3, task:"Rave", done:false},
    {id:4, task:"Repeat", done:false}]

}
const Reducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADDTO:
            return{...state, todos: [...state.todos,action.payload]}
            case DELETETO:
                return{...state, todos: state.todos.filter(el=> el.id !== action.payload)}
                case DONETO:
                    return{...state, todos: state.todos.map(el=> el.id===action.payload?{...el,done:!el.done}:el)}
      
        default:
            return state
    }
}
export  default Reducer