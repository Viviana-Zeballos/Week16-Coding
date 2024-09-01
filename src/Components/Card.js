import React from 'react';
import '../App.css'; 

function Card({ data, deleteCard, startEdit }) {
  return (
    <div className="card">
      <h3>{data.City}</h3>
      <p>Month: {data.Month}</p>
      <p>Experience: {data.Experience}</p>
      <button onClick={() => startEdit(data)}>Edit</button> <br/>
      <button onClick={() => deleteCard(data)}>Delete</button>
    </div>
  );
}

export default Card;
