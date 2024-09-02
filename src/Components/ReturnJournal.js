import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function ReturnJournal() {

  const [entries, setEntries] = useState([]);
  const [location, setLocation] = useState("");
  const [journalText, setJournalText] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      location,
      text: journalText,
    };

    setEntries([...entries, newEntry]);

    setLocation("");
    setJournalText("");
  };

  return (
    <div className="return-page-container">
      <div className="Return-Journal-Container">
        <form onSubmit={handleSubmit}>
          <h3>Returning from...</h3>
          <label>Location:</label> <br />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />{" "}
          <br/> <br/>
          <label>Journal Entry:</label> <br/>
          <textarea
            rows="10"
            columns="20"
            value={journalText}
            onChange={(e) => setJournalText(e.target.value)}
            required
          ></textarea>
          <br /> <br/>
          <input id="button" type="submit" value="Submit" /> <br/> <br/>
        </form>

        <div className="entries-list">
          {entries.map((entry, index) => (
            <div key={index} className="entry">
              <h5>{entry.location}</h5>
              <p>{entry.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReturnJournal;
