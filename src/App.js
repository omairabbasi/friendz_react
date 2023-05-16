import React, { useState } from 'react';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <h1>Hello, you have successfully signed up!</h1>
      <button onClick={handleButtonClick}>Go Home</button>
      {showPopup && (
        <div className="popup">
          <p>Hello, you clicked me!</p>
          <button onClick={handleClosePopup}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
