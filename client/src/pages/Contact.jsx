import { useState } from "react";

export const Contact = () => {
  //creating user for contact model state variable for managing state
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  //updating user on change any specific field for the user
  const handleInputChangedElement = (e) => {
    const targetElement = e.target.name;
    const targetElementValue = e.target.value;
    setContact({ ...contact, [targetElement]: targetElementValue });
  };

  //on submitting the contact form
  const onSubmitContactForm = (e) => {
    e.preventDefault();
    console.log(contact);
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="contact-content-heading">Contact Us</h1>
        </div>
        <div className="container grid grid-two-cols">
          <div className="contact-image">
            <img
              src="/images/support.png"
              alt="contact-image"
              width="400"
              height="500"
            ></img>
          </div>
          <section className="form-content">
            <form onSubmit={onSubmitContactForm}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  required
                  type="text"
                  name="username"
                  id="username"
                  value={contact.username}
                  placeholder="Enter your username"
                  autoComplete="off"
                  onChange={handleInputChangedElement}
                ></input>
              </div>
              <div>
                <label htmlFor="email">email</label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  value={contact.email}
                  placeholder="Enter your email"
                  autoComplete="off"
                  onChange={handleInputChangedElement}
                ></input>
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  value={contact.message}
                  placeholder="Enter message"
                  onChange={handleInputChangedElement}
                ></textarea>
              </div>

              <div className="btn-div">
                <button className="btn btnSubmit" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
};
