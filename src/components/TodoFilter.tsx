import React from 'react';

type FilterType = 'all' | 'active' | 'completed';

interface TodoFilterProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  counts: {
    all: number;
    active: number;
    completed: number;
  };
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, setFilter, counts }) => {
  const filters: FilterType[] = ['all', 'active', 'completed'];
  
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white rounded-lg shadow-sm p-4 border border-gray-100">
      <h2 className="text-lg font-medium text-gray-700 mb-3 sm:mb-0">
        Filter Tasks
      </h2>
      <div className="flex space-x-1">
        {filters.map((filterType) => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType)}
            className={`px-4 py-2 rounded-md transition-colors ${
              filter === filterType
                ? 'bg-indigo-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            <span className="ml-1 text-xs font-medium">
              ({counts[filterType]})
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TodoFilter;
