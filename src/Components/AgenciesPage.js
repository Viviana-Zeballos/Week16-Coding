import React, { useState, useEffect } from 'react';
import '../AgenciesPage.css'; 

function AgenciesPage() {
  const [agencies, setAgencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://66d244e462816af9a4f646cf.mockapi.io/agency');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAgencies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h4>Below you will find our favorite travel agencies along with contact information.</h4>
      <h4>Feel free to reach out and mention Travel Journal for an extra 10% off on their trip planning services!</h4>
      <div className="agency-container">
        {agencies.length === 0 ? (
          <p>No data available.</p>
        ) : (
          agencies.map(agency => (
            <div key={agency.id} className="agency-card">
              <h2>{agency.companyname}</h2>
              <p><strong>Email:</strong> {agency.email}</p>
              <p><strong>Phone:</strong> {agency.phonenumber}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AgenciesPage;
