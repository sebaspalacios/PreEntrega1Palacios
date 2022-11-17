

import { Link } from 'react-router-dom';
import { ProductContainer, Image, Info, Icon } from './StyledComponents';

const Item = ({ id, stock, Precio,Marca, pictureUrl }) => {
    return (
        <ProductContainer>
            <Image src={pictureUrl} />
            <Info>
            <Icon>
            {Marca}
            </Icon>
            <Icon>
           <strong>${Precio}</strong>
            </Icon>
            <Icon>
            {stock} unidades
            </Icon>
            <Icon style={{cursor: "pointer"}}>
            <Link to={`/item/${id}`}>Ver</Link>
            </Icon>
            </Info>
        </ProductContainer>
    );
}
export default Item;