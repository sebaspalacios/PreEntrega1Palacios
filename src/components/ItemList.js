import Item from "./Item";
import { ProductsContainer } from './styledComponents';

const ItemList = ({ items }) => {
    return (
        <ProductsContainer>
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} id={item.id} Titulo={item.Titulo} Precio={item.Precio} pictureUrl={item.imagen[0]} stock={item.stock} />)
            : <p>Cargando...</p>
        }
        </ProductsContainer>
    );
}

export default ItemList;