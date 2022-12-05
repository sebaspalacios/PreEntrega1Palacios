import { useContext } from "react";
import { CartContext } from "./CartContext";
import FormatNumber from "../utils/FormatNumber";
import { Link } from "react-router-dom";
import Summary from "../utils/Summary";
import BotonComp from "./BotonComp";

const Cart = () => {
    const { cartList, clearList, removeItem, calcTotalPerItem } = useContext(CartContext);

    return(
        <>  
            {
                cartList.length === 0 

                ? <section className="container cart_height">
                        <div className="d-flex align-items-center cart_container cartlist_mobile">
                            <div className="cart_text-container">
                                <h3>El carrito esta vacio.</h3>
                                <div className="text-center mt-4">
                                </div>
                                <BotonComp/>
                            </div>
                        </div>
                    </section>
                    : <><section className="container cart_height2">
                        <div className="d-flex justify-content-between mb-3">
                            <div className="d-flex justify-content-start">
                            <Link to="/"><button className="cart_button-clear">Volver a Tienda</button></Link>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button onClick={clearList} className="cart_button-clear">Vaciar Carrito</button>
                            </div>
                        </div>
                        
                        <div className="cart_list">
                            {cartList.map((item) => 
                            <div key={item.idItem}>
                            <div className="d-flex cart_mobile">
                            <img src={item.ImagenItem}></img>
                            <div className="cartlist_mobile">
                                <span><b>Producto:</b>{item.TituloItem}</span>
                            
                                <span><b>Precio:</b><FormatNumber number={item.PrecioItem}/>c/u</span>

                                <span><b>Cantidad:</b>{item.qtyItem} </span><br />

                            <div className="cart_list-total">
                                <span className="fs-5"><b>Precio Total:</b><FormatNumber number={calcTotalPerItem(item.idItem)}/></span>
                            </div>
                            </div>
                            </div>
                            <div className="cart_remove-item-cont">
                                <button className="cart_remove-item" onClick={() => removeItem(item.idItem)}>
                                        Eliminar
                                </button>
                            </div>
                            <hr/>
                            </div>)}
                            </div>
                            </section>
                             <Summary/>
                            </>}
        </>
    )
}

export default Cart;
