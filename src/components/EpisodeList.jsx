import React from "react";

export default function EpisodeList({
  episodes,
  selectedEpisode,
  onSelectEpisode,
  watchedEpisodes,
}) {
  console.log("episodes", episodes);

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4 text-white">Серии</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {episodes.map((episode) => (
          <div
            key={episode.id}
            onClick={() => onSelectEpisode(episode)}
            className={`episode-card ${
              watchedEpisodes.includes(episode.id) ? "watched" : ""
            } ${selectedEpisode?.id === episode.id ? "ring-2 ring-blue-500" : ""}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-white">{episode.title}</h4>
                <p className="text-xs text-gray-400 mt-1">
                  {episode.description}
                </p>
              </div>
              {watchedEpisodes.includes(episode.id) && (
                <span className="text-green-400 text-lg font-bold">✓</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
