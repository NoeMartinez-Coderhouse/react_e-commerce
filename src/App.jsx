import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const greeting = 'Somos Benni, la tienda mágica donde encontrarás todo para tu librería.'
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={greeting} />
      <p>
        <img src={logo} className="App-logo" alt="logo" />
      </p>
    </div>
  );
}

export default App;
