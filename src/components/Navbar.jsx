import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">FoodBridge</Link>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;