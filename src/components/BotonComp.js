import { Link } from "react-router-dom";
import { Button } from '@mui/material';
const BotonComp = () => {
    return(
        <Link to="/" className="btn_centrado">
            <Button className="btn_store">
                <div className="btn_store-icono">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                </div>
                <span>Ir a la tienda</span>
            </Button>
        </Link>
    )
}

export default BotonComp;