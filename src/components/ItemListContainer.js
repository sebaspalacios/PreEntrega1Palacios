/* import NavBar from '../components/NavBar' */
//import Snoop from '../components/Snoop'
import {useState, useEffect} from 'react'
import {productos} from '../utils/Productos'
import {customFetch} from '../utils/customFetch'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'



const ItemListContainer = ({greeting}) => {
    const [datos, setDatos] = useState([])
    const {categoryId } = useParams();
    
   useEffect (()=>{
  customFetch(2000, productos)
  .then((res) =>{
    if(categoryId){
        setDatos(res.filter((item)=> item.categoryId === categoryId))
    }else {
        setDatos(res)
    }
  })
        
    }, [categoryId])
    
    return (
        <>
        <ItemList datos={datos}/>
</>)}
 export default ItemListContainer;
    
