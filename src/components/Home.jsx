import React from 'react';

function Home (){


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent">
    <div className="bg-cover bg-center w-full h-full absolute top-0 left-0 z-0 opacity-50" style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}>
    </div>
    <div className="relative z-10 text-center">
      <h2 className="text-4xl font-bold mb-4 text-orange-500">Welcome to our CTA</h2>
      <p className="text-lg text-gray-200 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <a href="/events" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
        Get Started
      </a>
    </div>
  </div>
  )
  }

export default Home;