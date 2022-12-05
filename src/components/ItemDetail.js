import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Titulo, Desc, Precio} from './StyledComponents';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0);
    const {addToCart} = useContext(CartContext);

    const onAdd = (qty) => {
        alert("has seleccionado " + qty + " items.");
        setItemCount(qty);
        addToCart(item)
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
            <Precio>${item.Precio}</Precio>
            </InfoContainer>
            {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}><button variant="contained" color="secondary">Verificar</button></Link>
                    }
            </WrapperDetail>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;