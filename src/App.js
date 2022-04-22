import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NabBar';
import cart from './assets/img/product.png'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className='catalog'>
        <ItemListContainer
        image = {cart}
        product = {"Example product"}
        price = {30}
        description = {"Descripcion de ejemplo"}
        >
        </ItemListContainer>
      </div>  
    </div>
  );
}

export default App;
