import { useContext } from "react";
import  {CartContext}  from "../components/CartContext";
import { Link } from "react-router-dom";
import FormatNumber from "../utils/FormatNumber";



const Summary = () => {
    const { calcItemsQty, sumProducts } = useContext(CartContext);

    return(
        <section className="container d-flex justify-content-center mb-5">
            <div className="cart_resumen">
                <h3>Resumen de compra</h3>
                <div className="d-flex justify-content-between">
                    <span>Cant. de productos:</span>
                    <span>{calcItemsQty()} item/s</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>Envío:</span>
                    <span className="card_text fs-4">GRATIS</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>TOTAL:</span>
                    <span><FormatNumber number={sumProducts()}/></span>
                </div>
                <div className="text-center">
                    <Link to="/"><button className="btn_terminar-compra">Finalizar compra</button></Link>
                </div>
            </div>
        </section>
    );
}

export default Summary;