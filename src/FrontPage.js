import React, { useEffect, useState } from 'react';
import './index.css';

const FrontPage = () => {
  const [ticketCount, setTicketCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://qr-app-hzs5.onrender.com/ticket-count', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Error`);
        }
        const data = await response.json(); 
        setTicketCount(data.ticketCount); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <p>{ticketCount ? `Tickets generated: ${ticketCount}` : 'No tickets'}</p>
    </div>
  );
};

export default FrontPage;
