import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MovieSearch from "./pages/MovieSearch.Jsx";
import MovieWatchlist from "./pages/MovieWatchlist";

function App() {
  const URL = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&`;
  fetch(`${URL}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
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
