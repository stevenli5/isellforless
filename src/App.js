// import logo from './logo.svg';
import './styles/App.css';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Products from './components/Products';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="row">
        <Sidebar />
        <Products />
      </div>
    </div>
  );
}

export default App;
