import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function ReturnJournal() {
  // State to hold journal entries
  const [entries, setEntries] = useState([]);
  // State to hold current input values
  const [location, setLocation] = useState("");
  const [journalText, setJournalText] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new entry
    const newEntry = {
      location,
      text: journalText,
    };
    // Update the entries state with the new entry
    setEntries([...entries, newEntry]);
    // Clear the input fields 
    setLocation("");
    setJournalText("");
  };

  return (
    <div className="return-page-container">
      <div className="Return-Journal-Container">
        <form onSubmit={handleSubmit}>
          <h4>Returning from...</h4>
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
          <br />
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
