import React, { useState } from 'react';
import CalendarGrid from './components/CalendarGrid';
import Sidebar from './components/Sidebar';
import sampleEvents from './data/events.json';

export default function App() {
  const [events] = useState(sampleEvents);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white font-sans">
      <div className="p-4 text-center text-3xl font-bold">📆 Smart Scheduler Calendar</div>
      <div className="flex flex-col md:flex-row gap-4 p-4">
        <Sidebar events={events} />
        <CalendarGrid events={events} />
      </div>
    </div>
  );
}
