import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import FilmPayer from "./Pages/FilmPayer";
import SeriesPage from "./Pages/SeriesPage";
import "./index.css";

const getRouteState = () => {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const segments = path.split("/").filter(Boolean);

  if (segments[0] === "series" && segments[1]) {
    return {
      page: "series",
      seriesId: decodeURIComponent(segments[1]),
      filmId: null,
    };
  }

  if (segments[0] === "film" && segments[1]) {
    return {
      page: "film",
      seriesId: null,
      filmId: decodeURIComponent(segments[1]),
    };
  }

  return {
    page: "home",
    seriesId: null,
    filmId: null,
  };
};

function App() {
  const [route, setRoute] = useState(() => getRouteState());

  useEffect(() => {
    const handlePopState = () => {
      setRoute(getRouteState());
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, "", path);
    setRoute(getRouteState());
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header onOpenHome={() => navigateTo("/")} />
      {route.page === "series" ? (
        <SeriesPage
          seriesId={route.seriesId}
          onBackHome={() => navigateTo("/")}
        />
      ) : route.page === "film" ? (
        <FilmPayer filmId={route.filmId} onBackHome={() => navigateTo("/")} />
      ) : (
        <HomePage
          onOpenSeries={(seriesId) => navigateTo(`/series/${seriesId}`)}
          onOpenFilm={(filmId) => navigateTo(`/film/${filmId}`)}
        />
      )}
    </div>
  );
}

export default App;
