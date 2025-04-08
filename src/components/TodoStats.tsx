import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';

interface TodoStatsProps {
  total: number;
  completed: number;
  active: number;
}

const TodoStats: React.FC<TodoStatsProps> = ({ total, completed, active }) => {
  const completionPercentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6 border border-gray-100">
      <h2 className="text-lg font-medium text-gray-700 mb-3">Task Summary</h2>
      
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
            <Clock size={20} className="text-indigo-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total</p>
            <p className="text-lg font-medium">{total}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
            <CheckCircle size={20} className="text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Completed</p>
            <p className="text-lg font-medium">{completed}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
            <Circle size={20} className="text-amber-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Active</p>
            <p className="text-lg font-medium">{active}</p>
          </div>
        </div>
        
        <div className="flex-1 min-w-[200px]">
          <div className="flex justify-between mb-1">
            <span className="text-sm text-gray-500">Progress</span>
            <span className="text-sm font-medium">{completionPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500" 
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoStats;
