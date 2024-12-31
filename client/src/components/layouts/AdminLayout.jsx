import { FaUser, FaHome, FaRegListAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">
                  <FaUser />
                  users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">
                  <IoMdContact /> contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/services">
                  <FaRegListAlt />
                  services
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaHome /> Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
