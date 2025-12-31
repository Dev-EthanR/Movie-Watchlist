import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchMovie from "./pages/SearchMovie";
import MovieWatchlist from "./pages/MovieWatchlist";
import { useEffect, useState } from "react";

function App() {
  const [watchlist, setWatchlist] = useState(() => {
    const stored = localStorage.getItem("watchlist");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SearchMovie watchlist={watchlist} updateWatchlist={setWatchlist} />
          }
        />
        <Route
          path="/watchlist"
          element={
            <MovieWatchlist
              watchlist={watchlist}
              updateWatchlist={setWatchlist}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
