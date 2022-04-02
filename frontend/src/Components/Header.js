import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Absences</Link>
      </div>
    </header>
  );
}

export default Header;
