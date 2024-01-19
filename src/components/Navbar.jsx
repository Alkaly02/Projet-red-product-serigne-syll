import React, {useState} from "react";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function NavUser({ Toggle }) {
    const [notificationCount, setNotificationCount] = useState(3);
  return (
    <nav className="navbar navbar-expand-md navbar-light border-bottom py-1">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <span className="brand-name mx-2 text-dark fw-bold">Dashboard</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <form className="d-flex">
            <div className="input-group border rounded-pill">
              <button className="btn" type="submit">
                <i className="bi bi-search"></i>
              </button>
              <input
                className="form-control border-0 bg-transparent"
                type="search"
                placeholder="Recherche"
                aria-label="Search"
              />
            </div>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item d-flex align-items-center position-relative px-3">
              <span className="notification-badge">{notificationCount}</span>
              <NotificationsNoneIcon />
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle d-flex justify-content-center"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <AccountCircleIcon className="fs-1" />
              </a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <Link to="/connexion" className="nav-link">
                <LogoutIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavUser;
