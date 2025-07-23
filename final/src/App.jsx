import React from "react";
import { Routes, Route, Link } from "react-router";
import Home from "./Home";
import Calculate from "./Calculate";
import Notfound from "./Notfound";
import Fetch from "./Fetch";

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/calculate">
          Calculate
        </Link>
        <Link className="nav-link" to="/fetch">
          Fetch
        </Link>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculate" element={<Calculate />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
