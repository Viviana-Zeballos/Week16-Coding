import React from 'react';
import './App.css'; // Ensure you have a CSS file for styling

function Card({ data, deleteCard, startEdit }) {
  return (
    <div className="card">
      <h3>{data.City}</h3>
      <p>Month: {data.Month}</p>
      <p>Experience: {data.Experience}</p>
      <button onClick={() => startEdit(data)}>Edit</button>
      <button onClick={() => deleteCard(data)}>Delete</button>
    </div>
  );
}

export default Card;
