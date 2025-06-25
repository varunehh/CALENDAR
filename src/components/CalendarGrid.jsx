import { startOfMonth, endOfMonth, eachDayOfInterval, format, isSameDay } from 'date-fns';
import EventCard from './EventCard';

export default function CalendarGrid({ events }) {
  const currentDate = new Date();
  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start, end });

  return (
    <div className="grid grid-cols-7 gap-3 w-full">
      {days.map((day, index) => {
        const dailyEvents = events.filter(ev => isSameDay(new Date(ev.date), day));
        return (
          <div key={index} className="bg-white/10 p-2 rounded-lg backdrop-blur-md min-h-[100px] hover:scale-[1.02] transition-all">
            <div className={`font-bold ${isSameDay(day, currentDate) ? 'text-yellow-400' : ''}`}>{format(day, 'MMM d')}</div>
            {dailyEvents.map((ev, i) => <EventCard key={i} event={ev} />)}
          </div>
        );
      })}
    </div>
  );
}
