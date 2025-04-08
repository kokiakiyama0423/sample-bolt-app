import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
import TodoFilter from './components/TodoFilter';
import TodoStats from './components/TodoStats';
import EmptyState from './components/EmptyState';
import { Todo } from './types/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        return JSON.parse(savedTodos).map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt)
        }));
      } catch (e) {
        return [];
      }
    }
    return [];
  });
  
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date()
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const counts = {
    all: todos.length,
    active: todos.filter(todo => !todo.completed).length,
    completed: todos.filter(todo => todo.completed).length
  };

  const getEmptyStateMessage = () => {
    if (filter === 'all') return "You haven't added any tasks yet. Start by adding a new task above!";
    if (filter === 'active') return "You don't have any active tasks. Great job!";
    return "You don't have any completed tasks yet.";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8 text-center">
          <div className="flex items-center justify-center mb-2">
            <CheckCircle2 size={32} className="text-indigo-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-800">TaskMaster</h1>
          </div>
          <p className="text-gray-600">Keep track of your tasks and stay productive</p>
        </header>

        <TodoInput addTodo={addTodo} />
        
        <TodoStats 
          total={counts.all} 
          completed={counts.completed} 
          active={counts.active} 
        />
        
        <TodoFilter 
          filter={filter} 
          setFilter={setFilter} 
          counts={counts} 
        />

        <div className="space-y-2 mb-6">
          {filteredTodos.length > 0 ? (
            filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            ))
          ) : (
            <EmptyState message={getEmptyStateMessage()} />
          )}
        </div>

        {counts.completed > 0 && (
          <div className="flex justify-end">
            <button
              onClick={clearCompleted}
              className="text-sm text-gray-500 hover:text-red-500 transition-colors"
            >
              Clear completed tasks
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
