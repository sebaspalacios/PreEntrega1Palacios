const Contenedor = () => {
    return (
      <>
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav mx-auto ">
        <li className="nav-item">
          <a className="nav-link" href="#">Suplementos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Accesorios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


</>
    )
}

export default Contenedor;
