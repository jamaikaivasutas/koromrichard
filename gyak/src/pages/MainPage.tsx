import { Link } from "react-router-dom";
import "../styles/style.css";

function MainPage() {
  return (
    <>
      <Link to="/pizzas">
        <button>Minden Pizza</button>
      </Link>
    </>
  );
}

export default MainPage;
