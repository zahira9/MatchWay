import React from 'react';
import Header from './components/Header';
import Itinerary from './components/Itinerary';
import Recommendations from './components/Recommendations';
import Chatbot from './components/Chatbot';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Itinerary />
      <Recommendations />
      <Chatbot />
    </div>
  );
}

export default App;