import { Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="bottom-border-white">
        <h1>Nav</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default Nav;
