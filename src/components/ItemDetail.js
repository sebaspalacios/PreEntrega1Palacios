import ItemCount from './ItemCount';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Titulo, Desc, Precio} from './StyledComponents';

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>
        {
            item && item.imagen
            ? 
            <DetailContainer>
            <WrapperDetail>
            <ImgContainer>
            <ImageDetail src={item.imagen[0]} />
            </ImgContainer>
            <InfoContainer>
            <Titulo>{item.Titulo}</Titulo>
            <Desc>{item.descripcion}</Desc>
            <Precio>$ {item.Precio}</Precio>
            </InfoContainer>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            </WrapperDetail>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;
