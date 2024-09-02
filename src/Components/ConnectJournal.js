import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function ConnectJournal() {

  const [entries, setEntries] = useState([]);

  const [name, setName] = useState("");
  const [instagram, setInstagram] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      name,
      instagram,
      phoneNumber,
      email,
    };

    setEntries([...entries, newEntry]);

    setName("");
    setInstagram("");
    setPhoneNumber("");
    setEmail("");
  };

  return (
    <div className="Connect-page-container">
      <div className="Connect-Journal-Container">
        <form onSubmit={handleSubmit}>
          <h3>Stay In Touch!</h3>
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
