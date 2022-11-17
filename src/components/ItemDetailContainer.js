
import {useState, useEffect} from 'react'
import ItemDetail from "./ItemDetail";
import {customFetch} from '../utils/customFetch'
import {productos} from '../utils/Productos'
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const {idItem} = useParams()
    
    useEffect (() => {
        customFetch(2000, productos)
        .then (result => setDato(result.find((item)=> item.id === Number(idItem))))
        .catch (err => console.log(err))
    }, [idItem]);
return (

   <ItemDetail item= {dato}/> 
)

}
export default ItemDetailContainer;