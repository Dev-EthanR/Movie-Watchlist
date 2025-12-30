import { Link } from "react-router-dom";
import banner from "../assets/banner.png";

const Header = ({ title, path, pathName }) => {
  return (
    <div className="bg-black relative">
      <img
        className="w-full h-50 lg:h-120 object-cover object-[0%_15%]"
        src={banner}
        alt=""
      />
      <h1 className="absolute  top-1/2 lg:left-1/4 left-1/12 text-white text-3xl md:text-5xl font-extrabold tracking-tight">
        {title}
      </h1>
      <Link
        className="text-white absolute top-1/2 lg:left-3/4 right-1/12 lg:mt-3 mt-2 font-bold text-lg lg:text-xl"
        to={path}
      >
        {pathName}
      </Link>
    </div>
  );
};

export default Header;
