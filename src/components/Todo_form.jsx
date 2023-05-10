import React, { useState } from 'react'


const Todo_form = (props) => {
  const [newTodo, setNewTodo] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodoItem = { newTodo, isComplete: false }
    props.onNewTodo(newTodoItem)

  }


  return (
    <div>
      <h1>Todo Form</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" onChange={(e) => setNewTodo(e.target.value)} />
        </div>
        <br />
        <div>
          <button type='submit' className='btn btn-dark'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default Todo_form