// import react from "react";
// import reactDOM from "react-dom/client";
// import "./logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-navbar">
        <img src="logo.png" alt="Netflix Logo" />
        <h1>Chill Nation</h1>
      </div>
      <div className="right-navbar">
        <input
          className="search-bar"
          type="text"
          placeholder="Type to search"
        ></input>
        <button className="search-btn material-symbols-outlined">search</button>
      </div>
    </div>
  );
};

export default Navbar;
