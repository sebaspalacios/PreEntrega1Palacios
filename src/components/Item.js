import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { ProductContainer, Circle, Image, Info, Icon } from './styledComponents';

const Item = ({ id, stock, Precio,Titulo, pictureUrl }) => {
    return (
        <ProductContainer>
            <Circle />
            <Image src={pictureUrl} />
            <Info>
            <Icon>
            <LocalOfferOutlined /><strong>$ {Precio}</strong>
            </Icon>
            <Icon>
            <DescriptionOutlined />{stock} unid.
            </Icon>
            <Icon style={{cursor: "pointer"}}>
            <Link to={`/item/${id}`}><InfoOutlined />Detalle</Link>
            </Icon>
            </Info>
        </ProductContainer>
    );
}
export default Item;