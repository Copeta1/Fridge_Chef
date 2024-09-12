import Logo from "../../assets/images/Logo.png";
import "./navbar.css";
import Button from "../../widgets/Button";
import { useNavigate } from "react-router-dom";
import AccountIcon from "../AccountIcon/AccountIcon";
import IconButton from "@mui/material/IconButton";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

export default function Navbar() {
  const navigate = useNavigate();

  const isLandingPage = window.location.pathname === "/";

  return (
    <div
      className={`navbar_container dark ${!isLandingPage ? "not-landing" : ""}`}
    >
      <div className="navbar_inner">
        <div className="navbar_logo_container">
          <img
            className="main_logo"
            src={Logo}
            alt="Logo"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>

        {window.location.pathname === "/" && (
          <div className="navbar_links">
            <Button text="Login" to="/login" />
            <Button text="Register" to="/register" />
          </div>
        )}
        {window.location.pathname === "/register" && (
          <div className="navbar_links">
            <IconButton
              size="large"
              onClick={() => {
                navigate("/");
              }}
            >
              <CancelOutlinedIcon fontSize="inherit" />
            </IconButton>
          </div>
        )}
        {window.location.pathname === "/login" && (
          <div className="navbar_links">
            <IconButton
              size="large"
              onClick={() => {
                navigate("/");
              }}
            >
              <CancelOutlinedIcon fontSize="inherit" />
            </IconButton>
          </div>
        )}
        {window.location.pathname === "/mainpage" && (
          <div className="navbar_links">
            <AccountIcon />
          </div>
        )}
      </div>
    </div>
  );
}
