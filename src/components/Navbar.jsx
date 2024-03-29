import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <Link to="/">
      <div className="navbar">
        <FaCoins className="icon" />
        <h1>
          COIN <span className="purple">Search</span>
        </h1>
      </div>
    </Link>
  );
}
export default Navbar;
