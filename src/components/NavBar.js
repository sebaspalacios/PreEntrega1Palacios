
import CartWidget from "./CartWidget.js";
import Contenedor from "./Contenedor.js";
import Logeo from "./Logeo.js";
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        
     <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid"> </div>
  <div className="navbar-brand"><Link to='/' img src="./imgssp.png" width="80" className="rounded-circle" alt="Cinque Terre"></Link>
    <a className="navbar-brand" href="/" > <button data-text="Awesome" className="button">
    <span className="actual-text">&nbsp;sspstyle&nbsp;</span>
    <span className="hover-text" aria-hidden="true">&nbsp;sspstyle&nbsp;</span>
</button></a>
<Contenedor/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
    
      <ul className="navbar-nav mx-auto ">
        <li className="nav-item">
          <a className="nav-link" href="/">Remeras</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Jeans</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Accesorios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contacto</a>
        </li>
        <Logeo/>
      </ul>
      </div>
    <CartWidget/> 
    </div>
   
</nav>  
    )
}
 export default NavBar;