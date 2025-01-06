import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const contactURL = "http://localhost:5000/api/form/contact";
const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

export const Contact = () => {
  //creating user for contact model state variable for managing state
  const [contact, setContact] = useState(defaultContactFormData);

  const [userDataEntry, setUserDataEntry] = useState(true);
  const { userData } = useAuth();

  //if it is for the first time
  if (userDataEntry && userData) {
    setContact({
      username: userData.username,
      email: userData.email,
      message: "",
    });
    setUserDataEntry(false); //after making the very first entry set to false
  }

  //updating user on change any specific field for the user
  const handleInputChangedElement = (e) => {
    const targetElement = e.target.name;
    const targetElementValue = e.target.value;
    setContact({ ...contact, [targetElement]: targetElementValue });
  };

  //on submitting the contact form - /api/form/contact
  const onSubmitContactForm = async (e) => {
    e.preventDefault();

    //on submit sending data to contact api
    try {
      const response = await fetch(contactURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactFormData);
        const responseData = await response.json();
        toast.success(`Message sent successfully`);
        console.log(`Message sent successfully: ${responseData}`);
      }
    } catch (error) {
      toast.error(`Message not delivered`);
      console.log(`Message not delivered ${error}`);
    }
  };

  return (
    <>
      <section className="section-contact">
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
            <h1 className="contact-form-heading">Contact</h1>
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
