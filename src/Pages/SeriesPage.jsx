import { useEffect, useMemo, useState } from "react";
import SeasonSelector from "../components/SeasonSelector";
import EpisodeList from "../components/EpisodeList";
import VideoPlayer from "../components/VideoPlayer";
import {
  getAllSeasons,
  getSeasonById,
  getSeriesById,
} from "../data/episodesData";

const BackButton = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="Назад к списку сериалов"
    title="Назад к списку сериалов"
    className="mb-6 pr-4 inline-flex items-center justify-center rounded-full border border-gray-700 bg-gray-800 p-2 text-blue-400 transition-colors duration-200 hover:bg-gray-700 hover:text-blue-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
    <p>Назад</p>
  </button>
);

const SeriesPage = ({ seriesId, onBackHome }) => {
  const series = getSeriesById(seriesId);
  const seasons = useMemo(() => getAllSeasons(seriesId), [seriesId]);
  const [selectedSeason, setSelectedSeason] = useState(
    seasons[0]?.seasonNumber ?? 1,
  );
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [watchedEpisodes, setWatchedEpisodes] = useState([]);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    if (seasons.length === 0) {
      return;
    }

    const seasonStorageKey = `lastSeason:${seriesId}`;
    const episodeStorageKey = `lastEpisode:${seriesId}`;
    const watchedStorageKey = `watchedEpisodes:${seriesId}`;

    const savedSeason = localStorage.getItem(seasonStorageKey);
    const savedEpisode = localStorage.getItem(episodeStorageKey);
    const savedWatched = localStorage.getItem(watchedStorageKey);

    setSelectedSeason(
      savedSeason ? Number(savedSeason) : seasons[0].seasonNumber,
    );

    if (savedEpisode) {
      try {
        setSelectedEpisode(JSON.parse(savedEpisode));
      } catch (error) {
        console.error("Не удалось загрузить выбранный эпизод", error);
      }
    } else {
      setSelectedEpisode(null);
    }

    if (savedWatched) {
      try {
        setWatchedEpisodes(JSON.parse(savedWatched));
      } catch (error) {
        console.error("Не удалось загрузить просмотренные эпизоды", error);
      }
    } else {
      setWatchedEpisodes([]);
    }

    setShowPlayer(false);
  }, [seriesId, seasons]);

  const currentSeason = getSeasonById(seriesId, selectedSeason);
  const currentEpisodes = currentSeason ? currentSeason.episodes : [];

  const handleSelectSeason = (seasonNumber) => {
    setSelectedSeason(seasonNumber);
    localStorage.setItem(`lastSeason:${seriesId}`, String(seasonNumber));
    setSelectedEpisode(null);
    setShowPlayer(false);
  };

  const handleSelectEpisode = (episode) => {
    setSelectedEpisode(episode);
    localStorage.setItem(`lastEpisode:${seriesId}`, JSON.stringify(episode));
    setShowPlayer(true);
  };

  const handleMarkAsWatched = (episodeId) => {
    setWatchedEpisodes((prev) => {
      if (prev.includes(episodeId)) {
        return prev;
      }

      const updated = [...prev, episodeId];
      localStorage.setItem(
        `watchedEpisodes:${seriesId}`,
        JSON.stringify(updated),
      );
      return updated;
    });
  };

  const handleClosePlayer = () => {
    setShowPlayer(false);
  };

  const watchProgress =
    currentEpisodes.length > 0
      ? Math.round(
          (watchedEpisodes.filter((id) =>
            currentEpisodes.some((episode) => episode.id === id),
          ).length /
            currentEpisodes.length) *
            100,
        )
      : 0;

  if (!series) {
    return (
      <main className="container-app pb-12 px-4">
        <BackButton onClick={onBackHome} />
        <p className="text-white text-lg">Сериал не найден.</p>
      </main>
    );
  }

  return (
    <main className="container-app pb-12 px-4">
      <BackButton onClick={onBackHome} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">{series.name}</h1>
      </div>

      <div>
        <img src="" alt="" />
      </div>

      <SeasonSelector
        seasons={seasons}
        selectedSeason={selectedSeason}
        onSelectSeason={handleSelectSeason}
      />

      {currentSeason && (
        <div className="mb-6 rounded-lg border border-gray-700 bg-gray-800 p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-semibold text-gray-300">
              Прогресс сезона {selectedSeason}
            </span>
            <span className="font-bold text-blue-400">{watchProgress}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-700">
            <div
              className="h-2 rounded-full bg-blue-600 transition-all duration-300"
              style={{ width: `${watchProgress}%` }}
            ></div>
          </div>
          <p className="mt-2 text-sm text-gray-400">
            Просмотрено{" "}
            {
              watchedEpisodes.filter((id) =>
                currentEpisodes.some((episode) => episode.id === id),
              ).length
            }{" "}
            из {currentEpisodes.length} серий
          </p>
        </div>
      )}

      {showPlayer && selectedEpisode && (
        <VideoPlayer
          episode={selectedEpisode}
          onClose={handleClosePlayer}
          onWatched={handleMarkAsWatched}
        />
      )}

      <EpisodeList
        episodes={currentEpisodes}
        selectedEpisode={selectedEpisode}
        onSelectEpisode={handleSelectEpisode}
        watchedEpisodes={watchedEpisodes}
      />
    </main>
  );
};

export default SeriesPage;
