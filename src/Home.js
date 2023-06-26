import React, { useState } from 'react';

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  
  // some comment
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

export default Home;
