import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

interface TodoInputProps {
  addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 w-full">
      <div className="flex items-center w-full bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 p-4 outline-none text-gray-700 placeholder-gray-400"
          aria-label="Add a new task"
        />
        <button
          type="submit"
          className="p-4 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 transition-colors"
          disabled={!text.trim()}
          aria-label="Add task"
        >
          <PlusCircle size={24} />
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
