import React from 'react';
import { ClipboardList } from 'lucide-react';

interface EmptyStateProps {
  message: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
        <ClipboardList size={32} className="text-indigo-500" />
      </div>
      <h3 className="text-lg font-medium text-gray-700 mb-2">No tasks found</h3>
      <p className="text-gray-500 max-w-xs">{message}</p>
    </div>
  );
};

export default EmptyState;
