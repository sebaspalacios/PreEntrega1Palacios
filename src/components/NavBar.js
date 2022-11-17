import CartWidget from "./CartWidget.js";
import {Link} from 'react-router-dom';
import '../App.css';
const NavBar = () => {
    return (    
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <Link to='/'><img src="../imgssp.png" width="80" className="rounded-circle" alt="Cinque Terre"></img></Link>
    <Link className="navbar-brand" to="/" > 
    <button data-text="Awesome" className="button">
    <span className="actual-text">&nbsp;sspstyle&nbsp;</span>
    <span className="hover-text" aria-hidden="true">&nbsp;sspstyle&nbsp;</span>
    </button></Link>
    <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon" ></span>
    </button>
    <ul className="navbar-nav mx-auto ">
        <li className="nav-item">
        <Link className="nav-link" to='/category/remeras'>Remeras</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to='/category/pantalones'>Jeans</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to='/category/accesorios'>Accesorios</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/">Contacto</Link>
        </li>
    </ul>
    <CartWidget/> 
    </nav>  
    )
}
 export default NavBar;