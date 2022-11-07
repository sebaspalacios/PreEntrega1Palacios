import './App.css'
import ItemListContainer from './components/ItemListContainer.js'
import NavBar from './components/NavBar.js'
import Contenedor from './components/Contenedor.js'
import CartWidget from './components/CartWidget'


const App = () => {
  return (
    <>
<NavBar/>
<Contenedor/>
<ItemListContainer text='algo'/>
<ItemListContainer/>
<CartWidget/>
</>
  );
}

export default App;
