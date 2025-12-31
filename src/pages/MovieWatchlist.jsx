import Header from "../components/Header";

const MovieWatchlist = ({ watchlist, updateWatchlist }) => {
  console.log(watchlist);
  return (
    <div>
      <Header
        title={"My Watchlist"}
        path={"/"}
        pathName={"Search for movies"}
      />
    </div>
  );
};

export default MovieWatchlist;
