import React from "react";
import { seriesData } from "../data/episodesData";

const HomePage = ({ onOpenSeries }) => {
  const series = seriesData;

  return (
    <main>
      <h1 className="text-3xl font-bold mb-6 text-white px-4">Сериалы</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 ">
        {series.map((item) => (
          <div
            key={item.name}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden opacity-100 hover:cursor-pointer hover:opacity-50 transition-opacity duration-300"
            onClick={() => onOpenSeries(item.id)}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-white">{item.name}</h2>
              <p className="mt-1 text-sm font-medium text-gray-300">
                {item.years}
              </p>
              <p className="mt-2 text-sm leading-5 text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
