import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Event card component
const EventCard = ({ event, onReadMore }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
      <h2 className="text-xl font-semibold mt-2">{event.title}</h2>
      <p>{event.theme}</p>
      <button
        className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-md"
        onClick={() => onReadMore(event)}
      >
        Read More
      </button>
    </div>
  );
};

// Event details component
const EventDetails = ({ event, onClose, onRSVP }) => {
  const [email, setEmail] = useState('');

  const handleRSVP = () => {
    if (email.trim() !== '') {
      onRSVP(event.id, email);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
        <p>Theme: {event.theme}</p>
        <p>Venue: {event.venue}</p>
        <p>Date: {event.date}</p>
        <p>Time: {event.time}</p>
        <div className="flex items-center mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md py-2 px-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-orange-500 text-white px-4 py-2 ml-2 rounded-md"
            onClick={handleRSVP}
          >
            RSVP
          </button>
        </div>
        <button
          className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Main events page component
const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/api/events'); // Replace with your Rails API endpoint for fetching events
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleReadMore = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseDetails = () => {
    setSelectedEvent(null);
  };

  /*const handleRSVP = async (eventId, email) => {
    try {
      await axios.post(`/api/events/${eventId}/rsvp`, { email }); // Replace with your Rails API endpoint for RSVP
      alert('RSVP successful!'); // You can customize this with a notification component or toast library
      setSelectedEvent(null);
    } catch (error) {
      console.error('Error RSVPing:', error);
    }
  };
*/
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} onReadMore={handleReadMore} />
        ))}
      </div>
      {selectedEvent && (
        <EventDetails event={selectedEvent} onClose={handleCloseDetails} onRSVP={handleRSVP} />
      )}
    </div>
  );
};

export default EventsPage;


