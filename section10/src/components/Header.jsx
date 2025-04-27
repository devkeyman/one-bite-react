import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>Today 🎶</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// export default Header;
export default memo(Header);
