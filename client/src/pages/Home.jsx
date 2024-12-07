export const Home = () => {
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
                <form>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      placeholder="Enter your username"
                      name="username"
                      id="username"
                      required
                      autoComplete="off"
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
                    ></input>
                  </div>

                  <br />
                  <br />

                  <div>
                    <button type="submit">Register</button>
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
