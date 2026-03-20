import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Discover a wide variety of delicious dishes made with fresh
          ingredients and expert care. We’re here to satisfy your cravings and
          make every meal a delightful experience.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
