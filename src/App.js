import './styles/App.css';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import React from 'react';

function App() {
  /*
    {
      category: "iPhone",
      name: "iPhone 12",
      image: "img"  
      price: 1000.00,
      rating: 5,
      quality: "Good",
      description: "",
      reviews: ["", ""]
    }
  */

  return (
    <div className="App">
      <NavBar />
      <div className="row">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
