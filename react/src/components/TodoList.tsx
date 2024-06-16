import React from 'react';
import { TodoItems } from '../todo.model';

interface TodoListProps {
  items: TodoItems[];
  handleDelete(id: number): void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={() => props.handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;