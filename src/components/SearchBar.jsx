import React, { useState } from 'react';

const SearchBar = ({ fetchWeatherData }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData(location);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        placeholder="Enter location" 
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
