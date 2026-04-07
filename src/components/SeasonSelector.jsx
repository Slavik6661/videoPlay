import React from "react";

export default function SeasonSelector({
  seasons,
  selectedSeason,
  onSelectSeason,
}) {
  console.log("seasons", seasons);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Выберите сезон</h2>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {seasons.map((season) => (
          <button
            key={season.seasonNumber}
            onClick={() => onSelectSeason(season.seasonNumber)}
            className={`season-btn ${
              selectedSeason === season.seasonNumber ? "active" : ""
            }`}
          >
            Сезон {season.seasonNumber}
            <span className="ml-2 text-sm opacity-75">
              ({season.episodeCount})
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
