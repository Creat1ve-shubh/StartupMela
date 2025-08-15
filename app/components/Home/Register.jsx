import { HeartIcon } from 'lucide-react';

export default function RegisterCard() {
  const cards = [
    {
      city: 'New York',
      price: '$120',
      airport: 'JFK',
      img: 'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      city: 'Paris',
      price: '$150',
      airport: 'CDG',
      img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="flex justify-center gap-8 py-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-80 rounded-[2rem] overflow-hidden shadow-lg relative transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className="relative h-[500px]">
            <img
              src={card.img}
              alt={card.city}
              className="w-full h-full object-cover"
            />
            <button className="absolute top-4 right-4 bg-white/80 p-2 rounded-full backdrop-blur-sm hover:bg-white">
              <HeartIcon className="w-5 h-5 text-gray-700" />
            </button>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-5">
              <h2 className="text-white text-2xl font-semibold">{card.city}</h2>
              <p className="text-gray-300 text-sm">Economy</p>
              <div className="flex items-center text-gray-200 text-sm mt-2 space-x-4">
                <span className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 19.5l8.954-8.955m0 0a3.375 3.375 0 104.767-4.767 3.375 3.375 0 00-4.767 4.767z" />
                  </svg>
                  <span>from {card.price}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l-3-3m3 3l3-3" />
                  </svg>
                  <span>{card.airport}</span>
                </span>
              </div>
              <button className="mt-4 w-full bg-white text-black font-medium py-3 rounded-full shadow-md hover:bg-gray-100">
                Search flight
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
