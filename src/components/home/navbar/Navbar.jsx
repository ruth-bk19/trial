import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div>
        <a href="/" class="text">
          Logo
        </a>
      </div>
      <div>
        <select className=" border-none" name="Senior Care" value="Senior Care">
          <option value="ttttt">Senior Care</option>
          <option value="uuuuu">uuuuu</option>
        </select>
        <select name=" Child Care" value="Child  Care">
          <option value="ttttt">Child Care</option>
          <option value="uuuuu">uuuuu</option>
        </select>
        <select name="Pet Care" value="Pet Care">
          <option value="ttttt">pet Care</option>
          <option value="uuuuu">uuuuu</option>
        </select>
        <select name="Housekeeping" value="Housekeeping">
          <option value="ttttt">Housekeeping</option>
          <option value="uuuuu">uuuuu</option>
        </select>
        <select name="Tutoring" value="Tutoring">
          <option value="ttttt">Tutoring</option>
          <option value="uuuuu">uuuuu</option>
        </select>
      </div>

      <div class="button-container">
        <button class="button1"  onClick={()=>navigate("/Jobs")}>
          Apply for jobs
        </button>
        <button class="button2" onClick={() => navigate("/login")}>
          Login
        </button>
        <button class="button3" onClick={()=>navigate("/Jobs")}>
          join us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
