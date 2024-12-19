import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const URL = "http://localhost:5000/api/auth/login";

export const Login = () => {
  //creating state variables for Login for managing state for email and password
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth(); //from useAuth Consumer getting the function reference

  //on change Input element updating the state variable
  const handleInputChange = (e) => {
    let targetElement = e.target.name;
    let targetElementValue = e.target.value;

    //updating user state variable for changed target input element
    setUser({
      ...user,
      [targetElement]: targetElementValue,
    });
  };
  //on submit invoke preventing default behaviour of form i.e. refresh
  const handleSubmit = async (e) => {
    e.preventDefault();

    //making call for login using fetch api
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("login successfully");
        //response data sent from the server
        const resp_data = await response.json();
        console.log("response sent from the server ", resp_data);

        storeTokenInLS(resp_data.token);

        setUser({
          email: "",
          password: "",
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
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
                  src="/images/login.png"
                  alt="register image"
                  width="500"
                  height="400"
                ></img>
              </div>

              {/* registration-form div  */}
              <div className="registration-form">
                <h1 className="registration-form-heading mb-4">Login</h1>
                <br />
                <br />
                <form onSubmit={handleSubmit}>
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
                      Login
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
