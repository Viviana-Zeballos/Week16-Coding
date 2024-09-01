import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS-Styles/Journal.css";

function BeforeJournal() {
  // State to hold packing journal entries
  const [entries, setEntries] = useState([]);
  // State to hold current input values
  const [category, setcategory] = useState("");
  const [packing, setPacking] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new entry
    const newEntry = {
      category,
      packing,
    };
    // Update the entries state with the new entry
    setEntries([...entries, newEntry]);
    // Clear the input fields
    setcategory("");
    setPacking("");
  };

  return (
    <div className="before-page-container">
    <div className="Before-Journal-Container">
      <form onSubmit={handleSubmit}>
        <h4>Packing List...</h4>
        <label htmlFor="categoryInput">Category:</label>
        <input
          type="text"
          id="categoryInput"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
          required
        /> <br/> <br/>
        <label htmlFor="packingInput">Packing:</label>
        <textarea
          id="packingInput"
          rows="10" 
          columns="20"
          value={packing}
          onChange={(e) => setPacking(e.target.value)}
          required
        ></textarea>
        <br />
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

