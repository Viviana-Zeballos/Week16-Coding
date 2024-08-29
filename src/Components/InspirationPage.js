import React, { useState, useEffect } from 'react';
import Card from '../Card'; // Ensure this path is correct

const CARDS_ENDPOINT = 'https://66b9757dfa763ff550f86f25.mockapi.io/travel';

function InspirationPage() {
  const [cards, setCards] = useState([]);

  // Fetch cards from the API
  useEffect(() => {
    fetch(CARDS_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        setCards(data);
      });
  }, []);

  // Function to delete a card
  const deleteCard = (card) => {
    fetch(`${CARDS_ENDPOINT}/${card.id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setCards(cards.filter(c => c.id !== card.id));
    });
  };

  // Function to add a new card
  const addNewCard = (newCard) => {
    fetch(CARDS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCard)
    })
    .then(res => res.json())
    .then(data => {
      setCards([...cards, data]);
    });
  };

  return (
    <div>
      <h1>Inspiration Page</h1>
      <div className="card-container">
      {cards.map((card) => (
        <Card
          key={card.id}
          data={card}
          deleteCard={deleteCard}
        />
      ))}
      </div>
      <button onClick={() => addNewCard({ City: "New City", Month: "New Month", Experience: "New Experience", id: Date.now().toString() })}>
        Add New Card
      </button>
    </div>
  );
}

export default InspirationPage;
