import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import SeriesPage from "./Pages/SeriesPage";
import "./index.css";

const getRouteState = () => {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const segments = path.split("/").filter(Boolean);

  if (segments[0] === "series" && segments[1]) {
    return {
      page: "series",
      seriesId: decodeURIComponent(segments[1]),
    };
  }

  return {
    page: "home",
    seriesId: null,
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
      ) : (
        <HomePage onOpenSeries={(seriesId) => navigateTo(`/series/${seriesId}`)} />
      )}
    </div>
  );
}

export default App;
