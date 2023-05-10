import React from 'react'

const Todo_dashboard = (props) => {

  const toggleComplete = (e, i) => {
    props.onUpdateComplete(e.target.checked, i)
  }

  const handleTodoDelete = (e, i) => {
    props.onDelete(i)
  }

  return (
    <div>
      <fieldset>
        <legend><h1>Todo Dash</h1></legend>
        {
          props.todoList.map((eachTodoItem, i) => {
            return (
              <ul className='list-group' key={i} style={eachTodoItem.isComplete ? { textDecoration: "line-through" } : { color: "black" }}>
                <li className='list-group-item'>{eachTodoItem.newTodo}  <input type='checkbox' checked={eachTodoItem.isComplete} onChange={(e) => toggleComplete(e, i)} /> <br />
                <button className='btn btn-danger' onClick={(e) => handleTodoDelete(e, i)}>Delete</button></li>
              </ul>
              
            )
          })
        }
        
      </fieldset>
    </div>
  )
}

export default Todo_dashboard