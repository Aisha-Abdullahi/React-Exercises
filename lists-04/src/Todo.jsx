import React, { useState } from 'react'

export default function Todo() {

    const [todoItem, setTodoItem] =useState('')
    const [items, setItems] = useState ([])

    const handleTodo = (event) =>{
        setTodoItem(event.target.value);
    }

    const handleAddItem = () =>{
        if (todoItem !== '') {
            setItems([...items, todoItem])
            setTodoItem('')
        }
    }

    const handleReset = () =>{
        setItems([])
    }

    const handleRemove = (index) =>{
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems)
    }
  return (
    <div>
    <input type='text' value={todoItem} onChange={handleTodo}/>
    <button onClick={handleAddItem}>Add Task</button>
    <ul>
    {
        items.map((item, index) => (
            <li key={index}>{item} 
             <button onClick={() => handleRemove(index)}>Remove</button>
            </li> 
        ))
    }
    </ul>
    <button onClick={handleReset}>Clear List</button>
    </div>
  )
}
