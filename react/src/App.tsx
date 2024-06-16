import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { TodoItems } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItems[]>([]);

  const handleAddTodo = (text: string) => {
    setTodos(prevState => [...prevState, { text, id: Math.random() }]);
  }

  const handleDelete = (id: number) => {
    setTodos(prevState => prevState.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <NewTodo handleAddTodo={handleAddTodo} />
      <TodoList items={todos} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
