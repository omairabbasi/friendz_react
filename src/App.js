import React, { useState } from 'react';

window.addEventListener('load', function() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('STATE');
  const xhr = new XMLHttpRequest();
  xhr.open('POST', `https://albvg9jakf.execute-api.us-east-1.amazonaws.com/test/user_friends?userId=${id}`);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      // do something with the data
      console.log(data);
    } else {
      // handle errors
      console.error('Error:', xhr.statusText);
    }
  };
  xhr.onerror = function() {
    // handle network errors
    console.error('Network Error');
  };
  xhr.send();
});

function App() {
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

export default App;
