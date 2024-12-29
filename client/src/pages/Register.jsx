import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URL = "http://localhost:5000/api/auth/register";

export const Register = () => {
  //creating state variables to store the user date with the following four field properties and values
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  //getting function reference for storing token in local storage using useAuth
  const { storeTokenInLS } = useAuth();

  //handling the input change event
  const handleInputChange = (e) => {
    const targetElement = e.target.name;
    const targetElementValue = e.target.value;

    //updating the user state variables keeping the rest of the field remains unchanged
    setUser({
      ...user,
      [targetElement]: targetElementValue,
    });
  };

  //handling the submit button logic
  const handleSubmit = async (e) => {
    e.preventDefault(); //to prevent the page refresh we are using

    //making register request to backend
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      //response sent from the server
      const resp_data = await response.json();
      console.log("response sent from the server ", resp_data);

      //if response is ok means the request is succesfully completed
      if (response.ok) {
        toast.success("Registration successfull");
        storeTokenInLS(resp_data.token); //storing token in localStorage
        //reseting the state variables and redirecting to login screen.
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/login");
      } else {
        toast.error(
          resp_data.extraDetails ? resp_data.extraDetails : resp_data.message
        );
      }
    } catch (error) {
      console.log("getting issue at register ", error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              {/* registration-image div  */}
              <div className="registration-image">
                <img
                  src="/images/register.png"
                  alt="register image"
                  width="500"
                  height="400"
                ></img>
              </div>

              {/* registration-form div  */}
              <div className="registration-form">
                <h1 className="registration-form-heading mb-4">
                  Registration Form
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
                      value={user.username}
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
                      value={user.email}
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
                      value={user.phone}
                      onChange={handleInputChange}
                    ></input>
                  </div>

                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInputChange}
                    ></input>
                  </div>

                  <br />
                  <br />

                  <div>
                    <button type="submit" className="btn btn-submit">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
