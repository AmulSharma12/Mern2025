import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();

  const getUsersData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const usersData = await response.json();
      console.log(
        "printing values userData",
        usersData.map((e) => console.log(e))
      );
      setUsers(usersData);
      console.log(
        "printing values ",
        users.map((e) => console.log(e))
      );
    } catch (error) {
      console.log(`getUsersData method - ${error}`);
    }
  };

  // deleting user
  const deleteuser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      if (response.ok) {
        getUsersData();
      }
    } catch (error) {
      console.log(`deleteuser method : ${error}`);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin Users Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Update</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {users.map((currUser, index) => {
                return (
                  <tr key={index}>
                    <td>{currUser.username}</td>
                    <td>{currUser.email}</td>
                    <td>{currUser.phone}</td>
                    <td>
                      <Link to={`${currUser._id}/edit`}>Edit</Link>
                    </td>
                    <td>
                      <button onClick={() => deleteuser(currUser._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
