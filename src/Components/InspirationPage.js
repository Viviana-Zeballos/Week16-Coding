import React, { useState, useEffect } from 'react';
import Card from '../Card'; // Ensure the path is correct
import '../App.css'; // Ensure to import CSS file

const CARDS_ENDPOINT = 'https://66b9757dfa763ff550f86f25.mockapi.io/travel';

function InspirationPage() {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({
    City: '',
    Month: '',
    Experience: ''
  });

  useEffect(() => {
    fetch(CARDS_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        setCards(data);
      });
  }, []);

  const deleteCard = (card) => {
    fetch(`${CARDS_ENDPOINT}/${card.id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setCards(cards.filter(c => c.id !== card.id));
    });
  };

  const addNewCard = (event) => {
    event.preventDefault();
    
    const { City, Month, Experience } = newCard;

    // Basic validation
    if (!City || !Month || !Experience) {
      alert('Please fill out all fields');
      return;
    }

    fetch(CARDS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        City,
        Month,
        Experience,
        id: Date.now().toString() // Using timestamp as a unique ID
      })
    })
    .then(res => res.json())
    .then(data => {
      setCards([...cards, data]);
      setNewCard({ City: '', Month: '', Experience: '' }); // Clear form after submission
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewCard(prevState => ({
      ...prevState,
      [name]: value
    }));
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
      
      <form onSubmit={addNewCard} className="add-card-form">
        <h2>Add New Card</h2>
        <label>
          City:
          <input
            type="text"
            name="City"
            value={newCard.City}
            onChange={handleChange}
          />
        </label>
        <label>
          Month:
          <input
            type="text"
            name="Month"
            value={newCard.Month}
            onChange={handleChange}
          />
        </label>
        <label>
          Experience:
          <input
            type="text"
            name="Experience"
            value={newCard.Experience}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
}

export default InspirationPage;
