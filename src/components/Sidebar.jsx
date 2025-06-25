import React from 'react';
import { format, isAfter } from 'date-fns';

export default function Sidebar({ events }) {
  const upcoming = events.filter(ev => isAfter(new Date(ev.date), new Date())).slice(0, 5);
  return (
    <div className="bg-white/10 p-4 w-full md:w-1/3 rounded-xl backdrop-blur-md">
      <div className="text-xl font-semibold mb-2">Upcoming Events</div>
      <ul className="space-y-2">
        {upcoming.map((ev, i) => (
          <li key={i} className="bg-white/20 p-2 rounded-md">
            <div className="text-sm font-medium">{ev.title}</div>
            <div className="text-xs text-gray-300">{format(new Date(ev.date), 'PPP p')} • {ev.category}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

