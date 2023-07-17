import React, { useState } from 'react';

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

  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [filterBy, setFilterBy] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

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

  const handleSort = (criteria) => {
    setSortBy(criteria);
  };

  const handleFilter = (criteria) => {
    setFilterBy(criteria);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  // Apply sorting and filtering to events
  let filteredEvents = [...eventsData];

  if (sortBy === 'name') {
    filteredEvents.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'venue') {
    filteredEvents.sort((a, b) => a.venue.localeCompare(b.venue));
  } else if (sortBy === 'time') {
    filteredEvents.sort((a, b) => a.time.localeCompare(b.time));
  }

  if (filterBy) {
    filteredEvents = filteredEvents.filter((event) => event.venue === filterBy);
  }

  // Apply search query
  if (searchQuery) {
    filteredEvents = filteredEvents.filter((event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Pagination
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEvents.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col mt-10 text-center">
      <h2 className="text-orange-500 font-bold">All Available Events</h2>

      <div className="flex justify-center mt-4">
        <div className="relative mr-4">
          <input
            type="text"
            placeholder="Search Events"
            value={searchQuery}
            onChange={handleSearch}
            className="border border-gray-300 rounded-md px-4 py-2 w-64"
          />
        </div>

        <div className="relative mr-4">
          <select
            value={sortBy}
            onChange={(e) => handleSort(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2"
          >
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="venue">Venue</option>
            <option value="time">Time</option>
          </select>
        </div>

        <div className="relative">
          <select
            value={filterBy}
            onChange={(e) => handleFilter(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2"
          >
            <option value="">Filter By Venue</option>
            <option value="Venue 1">Venue 1</option>
            <option value="Venue 2">Venue 2</option>
            <option value="Venue 3">Venue 3</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {currentItems.map((event) => (
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
            <p className="text-gray-500 mt-2">RSVPs: {event.rsvpCount}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === index + 1 ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Events;

