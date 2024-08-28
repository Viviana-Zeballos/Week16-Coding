import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Journal() {
  return (
    <form>
      <div class="Journal-Container">
      <h4>Traveling To:</h4>
        <label>Location:</label>
        <input
          type="text"
          id="descriptionInput"
        />
        <label>Journal Entry:</label>
        <textarea
          id="textArea"
          rows="10"
          columns="10"
        ></textarea> <br />
        <input id="button" type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default Journal;
