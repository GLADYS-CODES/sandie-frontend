import backgroundImage from '../assets/bg.jpg';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-cover bg-center w-full h-full absolute top-12 left-0 z-0 bg-opacity-70" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-4 text-orange-500">Welcome to Campus Events</h2>
        <p className="text-lg text-gray-200 mb-8">Explore and join exciting events happening on campus.</p>
        <a href="/events" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Home;
