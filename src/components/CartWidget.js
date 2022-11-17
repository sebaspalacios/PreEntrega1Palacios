import React from 'react'
import {HiShoppingCart} from 'react-icons/hi'
/* import Logeo from './Logeo' */
const CartWidget = ()=> {
    return (
        <>
        <div>
        <HiShoppingCart color='white' fontSize={25}></HiShoppingCart>
        <span className="badge bg-primary rounded-pill">3</span>
        </div>
        <div>
       {/*  <Logeo/> */}
        </div>
        </>
    )
}
export default CartWidget