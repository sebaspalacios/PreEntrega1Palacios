import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { ProductAmountContainer, ProductAmount } from './StyledComponents';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));

    useEffect(() => {
        setCount(initial);
    },[initial]);
    
    const increment = () => {
        if (count < stock) setCount(count + 1);
    }

    const decrement = () => {
        if (count > initial) setCount(count - 1);
    }

    return (
        <ProductAmountContainer>
            <Button variant="text" onClick={increment}>+</Button>
            <ProductAmount>{count}</ProductAmount>
            <Button variant="text" onClick={decrement}>-</Button>
            {
                stock && count 
                ? <Button variant="contained" color="primary" onClick={() => onAdd(count)}>Agregar al carro</Button>
                : <Button variant="contained" disabled>Agg al carro</Button>
            }
            
        </ProductAmountContainer>
    );
}

export default ItemCount;