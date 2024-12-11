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
                  rows="8"
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

      <section className="section-map mb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.7329486203535!2d72.82042337482989!3d18.943211082234203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e25ee8439d%3A0x5acd924f2726ad2b!2sMarine%20Dr%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1733941007393!5m2!1sen!2sin"
          height="400"
          width="500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};
