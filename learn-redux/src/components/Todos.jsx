import { li, text } from 'framer-motion/client';
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { removeTodo } from '../features/todoSlice';

const Todos = () => {
  const todos = useSelector(state =>state.todos)
  const dispatch = useDispatch();
  return (
    <div>
    {todos.map((todo)=>{
      <li key={todo.id}>
        {text}
        <button
        onClick={()=>dispatch(removeTodo(todo.id))}
        >
        Delete Todo
        </button>
      </li>
    })}
    </div>
  )
}

export default Todos;
