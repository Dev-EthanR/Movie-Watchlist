import Header from "../components/Header";

const MovieSearch = () => {
  const search = (formData) => {
    const query = formData.get("searchQuery");
    alert(`You searched for '${query}'`);
  };

  return (
    <div>
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
    </div>
  );
};

export default MovieSearch;
