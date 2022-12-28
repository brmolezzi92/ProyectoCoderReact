import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"

//GREETING - NOMBRE DE LA MARCA
function Welcome(props) {
  return <h1>Bienvenido a, {props.brand}</h1>;
}


function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome brand="PetShop Mi Mascota Preferida" />
      <ItemListContainer marcasContainer={"Todas las marcas"}/>
    </div>
  );
}

export default App;
