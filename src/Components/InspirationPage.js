import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import "../CSS-Styles/Card.css";

const CARDS_ENDPOINT = 'https://66b9757dfa763ff550f86f25.mockapi.io/travel';

function InspirationPage() {
  // State to store fetched cards and form data for new/edit cards
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({
    State: '',
    Month: '',
    Experience: ''
  });
  const [editingCard, setEditingCard] = useState(null); 

// Fetch cards from the API on component mount
  useEffect(() => {
    fetch(CARDS_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        setCards(data);
      })
      .catch(error => console.error('Error fetching cards:', error));
  }, []);

    // Deletes a card by making a DELETE request
  const deleteCard = (card) => {
    fetch(`${CARDS_ENDPOINT}/${card.id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setCards(cards.filter(c => c.id !== card.id));
    })
    .catch(error => console.error('Error deleting card:', error));
  };

    // Adds a new card after validating form data
  const addNewCard = (event) => {
    event.preventDefault();

    const { State, Month, Experience } = newCard;

    // Basic validation
    if (!State || !Month || !Experience) {
      alert('Please fill out all fields');
      return;
    }

    fetch(CARDS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        State,
        Month,
        Experience,
        id: Date.now().toString() 
      })
    })
    .then(res => res.json())
    .then(data => {
      setCards([...cards, data]);
      setNewCard({ State: '', Month: '', Experience: '' }); 
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
    setEditingCard(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

    // Updates an existing card with new data
  const updateCard = (event) => {
    event.preventDefault();

    if (!editingCard || !editingCard.id) return;

    fetch(`${CARDS_ENDPOINT}/${editingCard.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editingCard)
    })
    .then(res => res.json())
    .then(data => {
      setCards(cards.map(c => c.id === data.id ? data : c));
      setEditingCard(null);
    })
    .catch(error => console.error('Error updating card:', error));
  };

  // spread operator is important to trigger re-renders
  const startEdit = (card) => {
    setEditingCard({ ...card });  
  };

  return (
    <div>
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
          State:
          <input
            type="text"
            name="State"
            value={newCard.State}
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
            State:
            <input
              type="text"
              name="State"
              value={editingCard.State || ''}
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
