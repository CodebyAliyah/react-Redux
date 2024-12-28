import React from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';
const AddTodo = () => {
  const [input, setInput] = React.useState()
  const dispatch = useDispatch();
  const addTodoHandler = (e)=>{
    e.preventDefault()
    dispatch(addTodo(input))
  }
  return (
    <div>
    <input 
    type="text"
    placeholder='Create Todo'
    onChange={(e)=>setInput(e.target.value)}
    >
    </input>
    <button  onClick={addTodoHandler} style={{backgroundColor:"blue" }}>
      Add Todo
    </button>
    </div>
  )
}

export default AddTodo;
