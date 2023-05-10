import React, { useState, useEffect } from 'react'
import Todo_dashboard from '../components/Todo_dashboard'
import Todo_form from '../components/Todo_form'





const Todo_list = () => {

    const [todoList, setTodoList] = useState([])


    const recievedTodo = (newTodo) => {
        setTodoList([...todoList, newTodo])
    }

    const complete = (updatedComplete, i) => {
        const tempList = [...todoList]
        tempList[i].isComplete = updatedComplete;
        setTodoList(tempList)
    }

    const deleteTodo = (delI) => {
        const filteredTodos = todoList.filter((todoList, i) => {
            return i !== delI;
        })
        setTodoList(filteredTodos)
    }


    return (
        <div>
            <h1>Todo List</h1>
            <Todo_form onNewTodo={recievedTodo} />
            <Todo_dashboard todoList={todoList} onUpdateComplete={complete} onDelete={deleteTodo} />
        </div>
    )
}

export default Todo_list