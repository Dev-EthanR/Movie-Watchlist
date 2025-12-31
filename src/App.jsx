import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchMovie from "./pages/SearchMovie";
import MovieWatchlist from "./pages/MovieWatchlist";
import { useState } from "react";

function App() {
  const [watchlist, setWatchlist] = useState([]);
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
