import React, { useState } from 'react';

const TodoList = ({items, handleRemoveTodo}) => {
  const [items, setItems] = useState(['Code', 'Clean', 'Exercise', 'Eat']);
  const [item, setItem] = useState('');

  const handleAddTodo = () => {
    setItems([...items, item]);
    setItem('');
  };

  const handleInputChange = (event) => {
    setItem(event.target.value);
  };

  const handleResetTodo = () => {
    setItems(['']);
  };

  const handleRemoveTodo = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  console.log(items);

  return (
    <div>
      <h4>Todo List</h4>
      {props.render(items, handleRemoveTodo)}

      <input value={item} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleResetTodo}>Reset</button>
    </div>
  );
};

export default TodoList;
