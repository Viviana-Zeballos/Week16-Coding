import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS-Styles/Journal.css";

function BeforeJournal() {

  const [entries, setEntries] = useState([]);
  const [category, setCategory] = useState("");
  const [packing, setPacking] = useState("");

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Creates a new entry
    const newEntry = {
      category,
      packing,
    };
    // Updates the entries state with the new entry
    setEntries([...entries, newEntry]);
    // Clears the input fields
    setCategory("");
    setPacking("");
  };

  return (
    <div className="before-page-container">
    <div className="Before-Journal-Container">
      <form onSubmit={handleSubmit}>
        <h3>Packing List...</h3>
        <label htmlFor="categoryInput">Category:</label>
        <input
          type="text"
          id="categoryInput"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        /> <br/> <br/>
        <label htmlFor="packingInput">Packing:</label>
        <textarea
          id="packingInput"
          rows="10" 
          columns="20"
          value={packing}
          onChange={(e) => setPacking(e.target.value)} // Updates state on change
          required
        ></textarea>
        <br /> <br/>
        <input id="button" type="submit" value="Submit" />
        <br/> <br/>
      </form>


        <div className="entries-list">
          {entries.map((entry, index) => (
            <div key={index} className="entry">
              <h5>{entry.category}</h5>
              <p>{entry.packing}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BeforeJournal;

