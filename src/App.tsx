interface Destination {
  name: string;
  image: string;
  description: string;
}

const destinations: Destination[] = [
  {
    name: "Okinawa",
    image: "/okinawa.jpg",
    description: "Experience the tropical paradise of Okinawa with its stunning beaches, rich culture, and unique Ryukyuan heritage."
  },
  {
    name: "Tokio",
    image: "/tokio.jpg",
    description: "Discover the vibrant metropolis of Tokyo, where tradition meets innovation in Japan's bustling capital city."
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Asset Tour</h1>
          <p className="text-xl text-gray-600">Explore beautiful destinations in Japan</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {destinations.map((destination) => (
            <div key={destination.name} className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105">
              <div className="relative">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h2 className="text-3xl font-bold text-white">{destination.name}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  {destination.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
