import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact.js';


function App() {
  return (
    <div className="App">      
        <Contact 
          name="Jean"
          avatar="https://randomuser.me/api/portraits/men/32.jpg"
          online="status"
        />
        <Contact 
          name="Jack"
          avatar="https://randomuser.me/api/portraits/men/79.jpg"
          online="status"
        />
        <Contact 
          name="Erya"
          avatar="https://randomuser.me/api/portraits/women/50.jpg"
          offline="status"
        />
    </div>
  );
}

export default App;
