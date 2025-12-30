import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieSearch from "./pages/MovieSearch.Jsx";
import MovieWatchlist from "./pages/MovieWatchlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieSearch />} />
        <Route path="/watchlist" element={<MovieWatchlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
