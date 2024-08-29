import React from 'react';

function Card({ data, deleteCard }) {
  const { City, Month, Experience, id } = data;

  return (
    <div className="card">
      <h3>{City}</h3>
      <p>Month: {Month}</p>
      <p>Experience: {Experience}</p>
      <button onClick={() => deleteCard(data)}>Delete</button>
    </div>
  );
}

export default Card;
