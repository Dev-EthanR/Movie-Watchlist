import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import addToWishListIcon from "../assets/add.png";
import removeFromWishListIcon from "../assets/remove.png";

const MovieWatchlist = ({ watchlist, updateWatchlist }) => {
  const [wishlistMovies, setWishlistMovies] = useState([]);
  const URL = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&`;
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
          wishlistMovies?.map((m) => (
            <div
              key={m.imdbID}
              className="flex gap-7 border-b-2 border-gray-200 pb-4"
            >
              <img
                className="rounded-lg w-25 h-37.5 lg:w-40 lg:h-55"
                src={m.Poster}
                alt={m.Title}
              />
              <div className="flex flex-col gap-4 justify-center">
                <div className="flex gap-4">
                  <h2 className="text-lg font-medium">{m.Title}</h2>
                  <span className="flex items-center gap-2 text-xs font-medium">
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.86276 0.518226C5.08727 -0.172757 6.06483 -0.172758 6.28934 0.518225L7.09152 2.98707C7.19192 3.29609 7.47989 3.50531 7.80481 3.50531H10.4007C11.1273 3.50531 11.4293 4.43502 10.8416 4.86207L8.74142 6.3879C8.47856 6.57889 8.36856 6.91741 8.46897 7.22643L9.27115 9.69528C9.49566 10.3863 8.7048 10.9609 8.11702 10.5338L6.01689 9.00797C5.75402 8.81699 5.39808 8.81699 5.13521 9.00797L3.03508 10.5338C2.4473 10.9609 1.65644 10.3863 1.88095 9.69528L2.68313 7.22643C2.78354 6.91741 2.67354 6.57889 2.41068 6.3879L0.31055 4.86207C-0.277235 4.43502 0.0248458 3.50531 0.751388 3.50531H3.34729C3.67221 3.50531 3.96017 3.29609 4.06058 2.98707L4.86276 0.518226Z"
                        fill="#FEC654"
                      />
                    </svg>
                    {m.imdbRating}
                  </span>
                </div>
                <div className="flex gap-4 text-xs">
                  <span>{m.Runtime}</span>
                  <span>{m.Genre}</span>
                  <button
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() =>
                      updateWatchlist((prev) =>
                        prev.includes(m.imdbID)
                          ? prev.filter((id) => id === m.imdbID)
                          : [...prev, m.imdbID]
                      )
                    }
                  >
                    <img
                      className="w-5"
                      src={
                        watchlist.includes(m.imdbID)
                          ? removeFromWishListIcon
                          : addToWishListIcon
                      }
                    />
                    Watchlist
                  </button>
                </div>
                <p className="max-w-110 text-sm text-gray-700">{m.Plot}</p>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default MovieWatchlist;
