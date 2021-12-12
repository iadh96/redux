import React from 'react'
import {useSelector} from "react-redux"
import Todo from './todo'

const List =()=> {
    const todos= useSelector(state => state.todos)
    return (
        <div>
       {todos.map(el=> <Todo el={el}  key={el.id}></Todo>)}
        </div>
    )
} 

export default List
