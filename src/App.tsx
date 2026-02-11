function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Asset Tour</h1>
          <p className="text-xl text-gray-600">Explore beautiful destinations in Japan</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Okinawa Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105">
            <div className="relative">
              <img 
                src="/okinawa.jpg" 
                alt="Okinawa" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h2 className="text-3xl font-bold text-white">Okinawa</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600">
                Experience the tropical paradise of Okinawa with its stunning beaches, 
                rich culture, and unique Ryukyuan heritage.
              </p>
            </div>
          </div>

          {/* Tokio Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105">
            <div className="relative">
              <img 
                src="/tokio.jpg" 
                alt="Tokyo" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h2 className="text-3xl font-bold text-white">Tokio</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600">
                Discover the vibrant metropolis of Tokyo, where tradition meets innovation 
                in Japan's bustling capital city.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
