import "./Header.css";
import { NavLink } from "react-router-dom";

import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

export const Header = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <InboxIcon /> Inbox
      </NavLink>
      <NavLink to="/starred">
        {" "}
        <StarIcon />
        Starred
      </NavLink>
      <NavLink to="/trash">
        <DeleteIcon />
        Trash
      </NavLink>
      <NavLink to="/spam">
        {" "}
        <ReportGmailerrorredIcon />
        Spam
      </NavLink>
    </nav>
  );
};
