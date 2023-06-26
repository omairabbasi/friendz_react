import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SuccessComponent from './components/signinSuccess';
import Home from './Home';

window.addEventListener('load', function() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('state');
  const code = urlParams.get('code')
  const xhr = new XMLHttpRequest();
  xhr.open('POST', `https://albvg9jakf.execute-api.us-east-1.amazonaws.com/test/user_signup?authCode=${code}&referrerId=${id}`);
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
   <Router basename={process.env.PUBLIC_URL}>
     <Routes>
        <Route path="/success" element={<SuccessComponent />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
