import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieSearch from "./pages/MovieSearch.Jsx";
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
            <MovieSearch watchlist={watchlist} updateWatchlist={setWatchlist} />
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
