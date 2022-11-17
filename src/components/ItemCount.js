import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { ProductAmountContainer, ProductAmount } from './StyledComponents';

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
        <ProductAmountContainer>
            <Button variant="text" onClick={increment}>+</Button>
            <ProductAmount>{count}</ProductAmount>
            <Button variant="text" onClick={decrement}>-</Button>
            {
                stock
                ? <Button variant="contained" color="primary" onClick={() => onAdd(count)}>Agg al carro</Button>
                : <Button variant="contained" disabled>Agg al carro</Button>
            }
            
        </ProductAmountContainer>
    );
}

export default ItemCount;