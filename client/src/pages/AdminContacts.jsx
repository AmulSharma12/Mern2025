import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {
  const [contactsData, setContactsData] = useState([]);
  const { authorizationToken } = useAuth();
  const fetchContactsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const contactList = await response.json();

      if (response.ok) {
        setContactsData(contactList);
      }
    } catch (error) {
      console.log(`AdminContacts - Error fetching getContactsData - ${error}`);
    }
  };

  //delete the contact data
  const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      if (response.ok) {
        fetchContactsData();
        toast.success("User contact deleted!");
      }
    } catch (error) {
      console.log(`Error deleting the contact - ${error}`);
    }
  };

  useEffect(() => {
    fetchContactsData();
  }, []);

  //returning view AdminContacts
  return (
    <section className="admin-contact-section">
      <div className="container">
        <h1>Admin Contacts Data</h1>
      </div>
      <div className="container admin-contacts">
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Message</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {contactsData.map((currContact, index) => {
              const { username, email, message } = currContact;
              return (
                <tr key={index}>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td>{message}</td>
                  <td>
                    <button onClick={() => deleteContact(currContact._id)}>
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
  );
};
