import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminUserUpdate = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const { id } = useParams();
  const { authorizationToken } = useAuth();

  //handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(userData),
        }
      );

      const updatedUser = await response.json();
      if (response.ok) {
        toast.success("User updated successfull");
        console.log(`user updated successfully :- ${updatedUser}`);
      }
    } catch (error) {
      toast.error(
        updatedUser.extraDetails ? updatedUser.extraDetails : updatedUser.message
      );
      console.log(`AdminUserUpdate - Error updating the details - ${error}`);
    }
  };

  //on input change
  const handleInputChange = (e) => {
    let targetElement = e.target.name;
    let targetValue = e.target.value;
    console.log(targetElement + " " + targetValue);

    setUserData({
      ...userData,
      [targetElement]: targetValue,
    });
  };

  const getUserDataById = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${userId}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      debugger;
      const userDataResponse = await response.json();
      setUserData(userDataResponse.data);
    } catch (error) {
      console.log(`AdminUserUpdate.jsx page :- ${error}`);
    }
  };

  //on the inital load getting user data by id
  useEffect(() => {
    getUserDataById(id);
  }, []);

  return (
    <>
      <section className="container admin-user-update-section">
        <div className="registration-form">
          <h1 className="registration-form-heading mb-4">
            Update User Details
          </h1>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">username</label>
              <input
                type="text"
                placeholder="Enter your username"
                name="username"
                id="username"
                required
                autoComplete="off"
                value={userData.username}
                onChange={handleInputChange}
              ></input>
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                id="email"
                required
                autoComplete="off"
                value={userData.email}
                onChange={handleInputChange}
              ></input>
            </div>

            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                placeholder="Enter Phone"
                name="phone"
                id="phone"
                required
                autoComplete="off"
                value={userData.phone}
                onChange={handleInputChange}
              ></input>
            </div>

            <br />
            <br />

            <div>
              <button type="submit" className="btn btn-submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
