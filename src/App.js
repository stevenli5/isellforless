import './styles/App.css';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import React from 'react';
// import ProductCard from './components/ProductCard';

function App() {
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
