import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SeasonSelector from "./components/SeasonSelector";
import EpisodeList from "./components/EpisodeList";
import VideoPlayer from "./components/VideoPlayer";
import { getAllSeasons, getSeasonById } from "./data/episodesData";
import "./index.css";

function App() {
  const [seasons] = useState(getAllSeasons());
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [watchedEpisodes, setWatchedEpisodes] = useState([]);
  const [showPlayer, setShowPlayer] = useState(false);

  // Загружаем сохраненные данные при загрузке приложения
  useEffect(() => {
    const savedSeason = localStorage.getItem("lastSeason");
    const savedEpisode = localStorage.getItem("lastEpisode");
    const savedWatched = localStorage.getItem("watchedEpisodes");

    if (savedSeason) {
      setSelectedSeason(parseInt(savedSeason));
    }

    if (savedEpisode) {
      try {
        setSelectedEpisode(JSON.parse(savedEpisode));
      } catch (e) {
        console.error("Ошибка при загрузке эпизода", e);
      }
    }

    if (savedWatched) {
      try {
        setWatchedEpisodes(JSON.parse(savedWatched));
      } catch (e) {
        console.error("Ошибка при загрузке просмотренных", e);
      }
    }
  }, []);

  // Сохраняем выбранный сезон
  const handleSelectSeason = (seasonNumber) => {
    setSelectedSeason(seasonNumber);
    localStorage.setItem("lastSeason", seasonNumber);
    setSelectedEpisode(null);
    setShowPlayer(false);
  };

  // Обработка выбора эпизода
  const handleSelectEpisode = (episode) => {
    setSelectedEpisode(episode);
    localStorage.setItem("lastEpisode", JSON.stringify(episode));
    setShowPlayer(true);
  };

  // Отметить как просмотренное
  const handleMarkAsWatched = (episodeId) => {
    setWatchedEpisodes((prev) => {
      if (!prev.includes(episodeId)) {
        const updated = [...prev, episodeId];
        localStorage.setItem("watchedEpisodes", JSON.stringify(updated));
        return updated;
      }
      return prev;
    });
  };

  // Закрытие плеера
  const handleClosePlayer = () => {
    setShowPlayer(false);
  };

  // Получаем текущий сезон
  const currentSeason = getSeasonById(selectedSeason);
  const currentEpisodes = currentSeason ? currentSeason.episodes : [];

  // Подсчитываем прогресс
  const watchProgress =
    currentEpisodes.length > 0
      ? Math.round(
          (watchedEpisodes.filter((id) =>
            currentEpisodes.some((ep) => ep.id === id),
          ).length /
            currentEpisodes.length) *
            100,
        )
      : 0;

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      <main className="container-app pb-12">
        <SeasonSelector
          seasons={seasons}
          selectedSeason={selectedSeason}
          onSelectSeason={handleSelectSeason}
        />

        {/* Прогресс просмотра */}
        {currentSeason && (
          <div className="mb-6 bg-gray-800 p-4 rounded-lg border border-gray-700">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300 font-semibold">
                Прогресс сезона {selectedSeason}
              </span>
              <span className="text-blue-400 font-bold">{watchProgress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${watchProgress}%` }}
              ></div>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Просмотрено{" "}
              {
                watchedEpisodes.filter((id) =>
                  currentEpisodes.some((ep) => ep.id === id),
                ).length
              }{" "}
              из {currentEpisodes.length} серий
            </p>
          </div>
        )}

        <EpisodeList
          episodes={currentEpisodes}
          selectedEpisode={selectedEpisode}
          onSelectEpisode={handleSelectEpisode}
          watchedEpisodes={watchedEpisodes}
        />
      </main>

      {showPlayer && selectedEpisode && (
        <VideoPlayer
          episode={selectedEpisode}
          onClose={handleClosePlayer}
          onWatched={handleMarkAsWatched}
        />
      )}
    </div>
  );
}

export default App;
