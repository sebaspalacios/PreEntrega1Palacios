/* import NavBar from '../components/NavBar' */
import Snoop from '../components/Snoop'
import {useState, useEffect} from 'react'
import {productos} from '../utils/Productos'
import {customFetch} from '../utils/customFetch'
import { useParams } from 'react-router-dom'



const ItemListContainer = ({greeting}) => {
    const [datos, setDatos] = useState([])
    const {categoryId } = useParams();
    
    useEffect (()=>{
        if (categoryId == undefined) 
        {
            customFetch (2000, productos)
        .then(result => setDatos(result))
        .catch(err => console.log(err))
        } else {
            customFetch (2000, productos.filter(item => item.categoryId == categoryId))
        .then(result => setDatos(result))
        .catch(err => console.log(err))
        }
        
    }, [categoryId])
    
    return (
        <>
        {
        datos.map(item => (
            <Snoop
            Titulo={item.Titulo}
            Precio={item.Precio}
            Marca={item.Marca}
            Envio={item.Envio}
            imagen={item.imagen} />
        ))}
</>)}



 export default ItemListContainer;
 
