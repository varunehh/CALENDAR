import React from 'react';

export default function EventCard({ event }) {
  const colorMap = {
    Meeting: 'bg-blue-500',
    Payment: 'bg-green-500',
    Deadline: 'bg-yellow-500',
    Expense: 'bg-red-500',
  };
  return (
    <div className={`text-sm mt-1 px-2 py-1 rounded ${colorMap[event.category] || 'bg-gray-500'} text-white shadow-md`}>
      {event.title}
    </div>
  );
}