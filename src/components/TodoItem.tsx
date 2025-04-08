import React from 'react';
import { Check, Trash2 } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
      <div className="flex items-center space-x-3 flex-1">
        <button
          onClick={() => toggleTodo(todo.id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
            todo.completed 
              ? 'bg-indigo-500 border-indigo-500' 
              : 'border-gray-300 hover:border-indigo-400'
          }`}
          aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
        >
          {todo.completed && <Check size={14} className="text-white" />}
        </button>
        <span 
          className={`text-gray-800 text-lg transition-all ${
            todo.completed ? 'line-through text-gray-400' : ''
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50"
        aria-label="Delete todo"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default TodoItem;
