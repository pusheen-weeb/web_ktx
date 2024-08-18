// App.js
import React from 'react';
import Navbar from './components/Navbar.js'; // Import the Navbar component

const App = () => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <main>
        <h1>Welcome to My Website</h1>
        {/* Other content */}
      </main>
    </div>
  );
};

export default App;
