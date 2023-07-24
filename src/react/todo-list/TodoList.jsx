import React, { useState } from 'react'

const TodoList = ({ items, onItemsChange }) => {
  const [newItem, setNewItem] = useState('')

  const onDeleteItem = (index) => {
    const newItems = [...items]
    newItems.splice(index, 1)
    onItemsChange(newItems)
  }

  const onAddItem = (e) => {
    e.preventDefault()
    const trimmedItem = newItem.trim()
    if (trimmedItem && !items.includes(trimmedItem)) {
      onItemsChange([...items, trimmedItem])
    }
    setNewItem('')
  }

  return (
    <div className="todoList">
      <h1>Todo List</h1>
      <dl className="todoList__items">
        {items.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button onClick={() => onDeleteItem(index)} className="todoList__deleteItemBtn">
              <i className="las la-minus-circle"></i>
            </button>
          </li>
        ))}
      </dl>
      <form onSubmit={onAddItem}>
        <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="Add a new item" />
        <button type="submit" className="todoList__addItemBtn">
          <i className="las la-plus-circle"></i>
        </button>
      </form>
    </div>
  )
}

export default TodoList
