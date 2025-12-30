import { useEffect, useState } from "react";
import Header from "../components/Header";
import addToWishListIcon from "../assets/add.png";

const MovieSearch = () => {
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(false);
  const URL = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&`;
  const search = (formData) => {
    setError(false);
    const query = formData.get("searchQuery");

    fetch(`${URL}s=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.Search);
      });
  };

  useEffect(() => {
    setMovie([]);
    if (!data) return setError(true);
    data.map((m) => {
      fetch(`${URL}i=${m.imdbID}`)
        .then((res) => res.json())
        .then((data) => {
          setMovie((prevMovies) => [...prevMovies, data]);
        });
    });
  }, [data]);

  // Actors
  // Awards
  // Boxoffice *
  // Country
  // DBD
  // Director
  // Genre *
  // Language
  // Plot *
  // Poster *
  // Production
  // Rated
  // Ratings
  // Released
  // Runtime *
  // Title *
  // Type
  // Website
  // Writer
  // Year
  // imdbID
  // imdbRating *
  // imdbVotes
  return (
    <>
      <div className="relative">
        <Header
          title={"Find your film"}
          path={"/watchlist"}
          pathName={"My Watchlist"}
        />
        <form
          action={search}
          className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
        >
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z"
                  fill="#9CA3AF"
                />
              </svg>
            </div>

            <input
              className="bg-white pl-11.5 pr-4 py-2 border border-gray-300 rounded-l-xl lg:w-120 w-80 outline-0"
              type="text"
              name="searchQuery"
              placeholder="Search for a movie"
              aria-label="search for a movie"
            />
            <button
              className="bg-gray-50 py-2 px-8 border rounded-r-xl border-gray-300 cursor-pointer hover:bg-gray-100"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <main
        className={`${
          error
            ? "mt-20 text-2xl max-w-100 mx-auto text-gray-300 font-bold"
            : "grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 place-items-center mt-12 px-2 lg:mt-26"
        }`}
      >
        {error ? (
          <h2 className="text-center" aria-live="polite">
            Unable to find what you’re looking for. Please try another search.
          </h2>
        ) : (
          movie?.map((m) => (
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
                  <button className="flex items-center gap-2 cursor-pointer">
                    <img className="w-5" src={addToWishListIcon} />
                    Watchlist
                  </button>
                </div>
                <p className="max-w-110 text-sm text-gray-700">{m.Plot}</p>
              </div>
            </div>
          ))
        )}
      </main>
    </>
  );
};

export default MovieSearch;
