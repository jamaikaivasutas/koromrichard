import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to="/">
        <button>Vissza a pizzákra</button>
      </Link>
    </>
  );
};

export default NotFound;
