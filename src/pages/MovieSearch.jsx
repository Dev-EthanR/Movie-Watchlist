import Header from "../components/Header";

const MovieSearch = () => {
  return (
    <div>
      <Header
        title={"Find your film"}
        path={"/watchlist"}
        pathName={"My Watchlist"}
      />
    </div>
  );
};

export default MovieSearch;
