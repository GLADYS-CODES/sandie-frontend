
   
import React, { useState } from 'react';
//import React from 'react';
function Events() {
  const [eventsData, setEventsData] = useState([
    {
      id: 1,
      name: 'Event 1',
      venue: 'Venue 1',
      time: '10:00 AM',
      rsvp: false,
      rsvpCount: 0,
    },
    {
      id: 2,
      name: 'Event 2',
      venue: 'Venue 2',
      time: '2:00 PM',
      rsvp: false,
      rsvpCount: 0,
    },
    {
      id: 3,
      name: 'Event 3',
      venue: 'Venue 3',
      time: '6:00 PM',
      rsvp: false,
      rsvpCount: 0,
    },
  ]);

  const handleRSVP = (eventId) => {
    const updatedEventsData = eventsData.map((event) => {
      if (event.id === eventId) {
        const updatedRSVPCount = event.rsvp ? event.rsvpCount - 1 : event.rsvpCount + 1;
        return { ...event, rsvp: !event.rsvp, rsvpCount: updatedRSVPCount };
      }
      return event;
    });
    setEventsData(updatedEventsData);
  };

  return (
    <div className="flex flex-col mt-10 text-center">
      <h2 className="text-orange-500 font-bold">All Available Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {eventsData.map((event) => (
          <div className="bg-white rounded-lg shadow-lg p-6" key={event.id}>
            <h3 className="text-lg font-bold mb-2">{event.name}</h3>
            <p className="text-gray-500 mb-2">Venue: {event.venue}</p>
            <p className="text-gray-500 mb-4">Time: {event.time}</p>
            <button
              className={`bg-orange-500 text-white px-4 py-2 rounded ${
                event.rsvp ? 'bg-orange-900' : ''
              }`}
              onClick={() => handleRSVP(event.id)}
            >
              {event.rsvp ? 'RSVPed' : 'RSVP'}
            </button>
            <p className="text-gray-500 mt-2">
              RSVPs: {event.rsvpCount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
