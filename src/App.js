import './App.css'
import ItemListContainer from './ItemListContainer.js'
import NavBar from './NavBar.js'
import Contenedor from './Contenedor.js'

const App = () => {
  return (
    <>
<NavBar/>
<Contenedor/>
<ItemListContainer text='Proteinas varios'/>
<ItemListContainer/>
</>
  );
}

export default App;
