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
  const [editingCard, setEditingCard] = useState(null); // State for the card being edited

  useEffect(() => {
    fetch(CARDS_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        setCards(data);
      })
      .catch(error => console.error('Error fetching cards:', error));
  }, []);

  const deleteCard = (card) => {
    fetch(`${CARDS_ENDPOINT}/${card.id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setCards(cards.filter(c => c.id !== card.id));
    })
    .catch(error => console.error('Error deleting card:', error));
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
    })
    .catch(error => console.error('Error adding card:', error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewCard(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    console.log('Edit change:', name, value); // Debug log
    setEditingCard(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const updateCard = (event) => {
    event.preventDefault();

    if (!editingCard || !editingCard.id) return;

    console.log('Updating card:', editingCard); // Debug log

    fetch(`${CARDS_ENDPOINT}/${editingCard.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editingCard)
    })
    .then(res => res.json())
    .then(data => {
      console.log('Updated card data:', data); // Debug log
      setCards(cards.map(c => c.id === data.id ? data : c));
      setEditingCard(null); // Clear editing card after update
    })
    .catch(error => console.error('Error updating card:', error));
  };

  const startEdit = (card) => {
    console.log('Editing card:', card); // Debug log
    setEditingCard({ ...card });
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
            startEdit={startEdit}
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

      {editingCard && (
        <form onSubmit={updateCard} className="edit-card-form">
          <h2>Update Card</h2>
          <label>
            City:
            <input
              type="text"
              name="City"
              value={editingCard.City || ''}
              onChange={handleEditChange}
            />
          </label>
          <label>
            Month:
            <input
              type="text"
              name="Month"
              value={editingCard.Month || ''}
              onChange={handleEditChange}
            />
          </label>
          <label>
            Experience:
            <input
              type="text"
              name="Experience"
              value={editingCard.Experience || ''}
              onChange={handleEditChange}
            />
          </label>
          <button type="submit">Update Card</button>
          <button type="button" onClick={() => setEditingCard(null)}>Cancel</button>
        </form>
      )}
    </div>
  );
}

export default InspirationPage;
