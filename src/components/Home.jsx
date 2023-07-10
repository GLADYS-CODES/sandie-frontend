import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [backgroundImage, setBackgroundImage] = useState('');    //set variable to hold the background image

  useEffect(() => {   // Fetch a random image from Unsplash API
    const fetchRandomImage = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {    
          params: {
            client_id: '_5Ql_GANS0Zk8MgfZeMkOL2mebq_gFvpA1NRPQDHcxE',
          },
        });
//  set the background image to the random image we fetched
        setBackgroundImage(response.data.urls.regular);
      } catch (error) {                                       // catch any errors
        console.error('Error fetching random image:', error);
      }
    };
//  call the fetchRandomImage function when the component mounts so we can see the image right away
    fetchRandomImage();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-cover bg-center w-full h-full absolute top-15 left-0 z-0 bg-opacity-70" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-4 text-orange-500">Welcome to Campus Events</h2>
        <p className="text-lg text-gray-200 mb-8">Explore and join exciting events happening on campus.</p>
        <a href="/events" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          Find Your Event
        </a>
      </div>
    </div>
  );
}

export default Home;

