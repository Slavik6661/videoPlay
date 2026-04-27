import { useEffect, useState } from "react";
import { getFilmById } from "../data/episodesData";

const BackButton = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="Назад к списку фильмов"
    title="Назад к списку фильмов"
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
    <span>Назад</span>
  </button>
);

const FilmPayer = ({ filmId, onBackHome }) => {
  const film = getFilmById(filmId);
  const [isWatched, setIsWatched] = useState(false);

  useEffect(() => {
    if (!film) {
      return;
    }

    setIsWatched(localStorage.getItem(`watchedFilm:${filmId}`) === "true");
  }, [film, filmId]);

  const handleMarkWatched = () => {
    localStorage.setItem(`watchedFilm:${filmId}`, "true");
    setIsWatched(true);
  };

  if (!film) {
    return (
      <main className="container-app pb-12 px-4">
        <BackButton onClick={onBackHome} />
        <p className="text-white text-lg">Фильм не найден.</p>
      </main>
    );
  }

  return (
    <main className="container-app pb-12 px-4">
      <BackButton onClick={onBackHome} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">{film.name}</h1>
        <p className="mt-2 text-gray-400">{film.years}</p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
        <img
          src={film.img}
          alt={film.name}
          className="w-full max-w-[300px] h-auto rounded-md object-cover object-top shadow-lg"
        />
        <div></div>

        <section className="w-full max-h-[424px]">
          <div
            className="video-container relative mb-4"
            style={{ paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              src={film.vkUrl}
              frameBorder="0"
              allowFullScreen
              allow="autoplay; encrypted-media"
              title={film.name}
              onLoad={handleMarkWatched}
              className="absolute left-0 top-0 h-full w-full"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default FilmPayer;
