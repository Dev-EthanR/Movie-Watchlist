import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchMovie from "./pages/SearchMovie";
import MovieWatchlist from "./pages/MovieWatchlist";
import { createContext, useEffect, useState } from "react";

export const WatchlistContext = createContext();

function App() {
  const [watchlist, setWatchlist] = useState(() => {
    const stored = localStorage.getItem("watchlist");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <WatchlistContext.Provider value={{ watchlist, setWatchlist }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SearchMovie
                watchlist={watchlist}
                updateWatchlist={setWatchlist}
              />
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
    </WatchlistContext.Provider>
  );
}

export default App;
