import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import addToWishListIcon from "../assets/add.png";
import Header from "../components/Header";
import Card from "../components/Card";
import { WatchlistContext } from "../App";

const MovieWatchlist = () => {
  const [wishlistMovies, setWishlistMovies] = useState([]);
  const { watchlist } = useContext(WatchlistContext);

  const URL = `https://www.omdbapi.com/?apikey=${
    import.meta.env.VITE_API_KEY
  }&`;
  useEffect(() => {
    setWishlistMovies([]);
    watchlist.forEach((id) => {
      fetch(`${URL}i=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setWishlistMovies((prevMovies) => [...prevMovies, data]);
        });
    });
  }, [watchlist]);
  return (
    <div>
      <Header
        title={"My Watchlist"}
        path={"/"}
        pathName={"Search for movies"}
      />
      <main
        className={`${
          watchlist.length <= 0
            ? "mt-20 text-2xl max-w-150 mx-auto text-gray-300 font-bold"
            : "grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 place-items-center mt-12 px-2 lg:mt-26"
        }`}
      >
        {watchlist.length <= 0 ? (
          <>
            <h2 className="text-center mb-4" aria-live="polite">
              Your watchlist is looking a little empty...
            </h2>
            <Link
              className="text-black font-bold text-lg lg:text-xl flex justify-center items-center gap-3"
              to={"/"}
            >
              <img
                className="w-6"
                src={addToWishListIcon}
                alt="Go to home page to add items"
              />
              Let’s add some movies!
            </Link>
          </>
        ) : (
          wishlistMovies?.map((m) => <Card key={m.imdbID} movie={m} />)
        )}
      </main>
    </div>
  );
};

export default MovieWatchlist;
