
import {useState, useEffect} from 'react'
import ItemDetail from "./ItemDetail";
import {customFetch} from '../utils/customFetch'
const {Productos} = require('../utils/Productos');

const ItemDetailContainer = () => {
    const [dato, setDatos] = useState({});
    
    useEffect (() => {
        customFetch(2000, Productos [3])
        .then (result => setDatos(result))
        .catch (err => console.log(err))
    }, []);
return (

   <ItemDetail item= {dato}/> 
)

}
export default ItemDetailContainer;