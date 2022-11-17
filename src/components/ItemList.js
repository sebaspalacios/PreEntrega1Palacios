import Item from "./Item";
import { ProductsContainer } from './StyledComponents';

const ItemList = ({ datos }) => {
    return (
        <ProductsContainer>
        {
            
             datos.map(item => <Item key={item.id} Marca={item.Marca} id={item.id} Titulo={item.Titulo} Precio={item.Precio} pictureUrl={item.imagen[0]} stock={item.stock} />)
           
        }
        </ProductsContainer>
    );
}

export default ItemList;