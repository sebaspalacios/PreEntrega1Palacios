import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import './App.css';
import Cart from "./components/Cart";
import CartContextProvider from './components/CartContext';
const App = () => {
    return (
        <CartContextProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                <Route path='/Cart' element={<Cart/>} />
            </Routes>
        </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;