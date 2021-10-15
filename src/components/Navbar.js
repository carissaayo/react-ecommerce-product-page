import React, { useState, useEffect} from "react";
import { links } from "../util";
import "./Navbar.css";

const Navbar = () => {
  const [selected, setSelected] = useState(false);


  return (
    <ul className="nav">
      {links.map((link) => {
          const {name,id} = link;
            return (
              <li 
              selected={selected}
                className= "link"
                key={id}
                data-id={id}
              >
                {name}
              </li>
            );       
      })}
    </ul>
  );
};

export default Navbar;
