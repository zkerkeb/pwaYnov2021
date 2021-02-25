import React, { useState } from 'react'

import { uuid } from 'uuidv4'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    if (!inputValue) {
      alert('la todo ne doit pas etre vide')
    } else {
      const todoObject = { value: inputValue, id: uuid() }
      setTodos([...todos, todoObject])
      setInputValue('')
    }
  }

  const deleteTodo = async deletedTodoId => {
    const filteredTodo = await todos.filter(todo => todo.id !== deletedTodoId)
    setTodos(filteredTodo)
  }

  return (
    <div>
      <p>TodoList</p>
      <form onSubmit={onSubmit}>
        <input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          name='todoInput'
          type='text'
        ></input>
      </form>
      {todos.map(todo => (
        <div key={todo.id}>
          <p>{todo.value}</p>
          <button onClick={() => deleteTodo(todo.id)}>supprimer</button>
        </div>
      ))}
    </div>
  )
}

export default TodoList
