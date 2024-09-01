import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function ConnectJournal() {
  // State to hold journal entries
  const [entries, setEntries] = useState([]);
  // State to hold current input values
  const [name, setName] = useState("");
  const [instagram, setInstagram] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new entry
    const newEntry = {
      name,
      instagram,
      phoneNumber,
      email,
    };
    // Update the entries state with the new entry
    setEntries([...entries, newEntry]);
    // Clear the input fields 
    setName("");
    setInstagram("");
    setPhoneNumber("");
    setEmail("");
  };

  return (
    <div className="Connect-page-container">
      <div className="Connect-Journal-Container">
        <form onSubmit={handleSubmit}>
          <h4>Stay In Touch!</h4>
          <label>Name:</label> <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />{" "}
          <br /> <br />
          <label>Instagram:</label> <br />
          <input
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            required
          />{" "}
          <br /> <br />
          <label>Phone Number:</label> <br />
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />{" "}
          <br /> <br />
          <label>Email:</label> <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />{" "}
          <br/> <br/>
          <input id="button" type="submit" value="Submit" /> <br/> <br/>
        </form>

        <div className="entries-list">
          {entries.map((entry, index) => (
            <div key={index} className="entry">
              <h5>{entry.name}</h5>
              <p>Instagram: {entry.instagram}</p>
              <p>Phone Number: {entry.phoneNumber}</p>
              <p>Email: {entry.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ConnectJournal;
