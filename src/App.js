import React from 'react';
import { useState } from 'react';
import './App.css';
import Filter from './components/filter/filter';
import CardList from './components/card-list/card-list';
import fetch from './services/api-service';


function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchDataUsers(term) {
    try {
      const users = await fetch(term);

      setUsers(users);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="app">

      <Filter onTermChanged={fetchDataUsers} />

      {!loading && !error && Object.keys(users).length !== 0 && (
        <CardList users={users} />
      )}
      {loading && (
        <p className='app_msg app_loading'>Loading...</p>
      )}
      {error && (
        <p className='app_msg app_error'>Oops! Error!</p>
      )}

    </div>
  );
}

export default App;
