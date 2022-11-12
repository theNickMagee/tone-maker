import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const navItems = [
    {
      title: "Gadgets",
      route: "/gadgets",
    },
  ];

  const handleClick = (r) => {
    navigate(r);
  };

  return (
    <div>
      {navItems.map((item, i) => {
        return (
          <div className="hover-click" key={i} onClick={() => handleClick(item.route)}>
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default Header;
