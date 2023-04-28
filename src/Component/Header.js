import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <NavLink to="/">Inbox</NavLink> ||
      <NavLink to="/starred">Starred</NavLink> ||
      <NavLink to="/trash">Trash</NavLink> ||
      <NavLink to="/spam">Spam</NavLink>
    </>
  );
};
