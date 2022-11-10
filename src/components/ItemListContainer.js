/* import NavBar from '../components/NavBar' */
import Snoop from '../components/Snoop'
import {useState, useEffect} from 'react'
import {data} from '../utils/Data'
import {customFetch} from '../utils/customFetch'



const ItemListContainer = () => {
    const [datos, setDatos] = useState([])
    
    useEffect (()=>{
        customFetch (2000, data)
        .then(response => setDatos(response))
        .catch(err => console.log(err))
    }, [])
    
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
 
