import './App.css';
import NavBar from './components/NavBar/NabBar';
import cart from './assets/img/product.png'
import Item from './components/Item/Item';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
