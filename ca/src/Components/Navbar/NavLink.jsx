import { Link } from "react-router-dom";

const NavLink = ({ to, children, setActive, active }) => {
  const handleClick = () => {
    if (setActive) {
      setActive();
    }
  };

  return (
    <li onClick={handleClick}>
      <Link to={to}>{children}</Link>
      {active ? <hr /> : null}
    </li>
  );
};

export default NavLink;
