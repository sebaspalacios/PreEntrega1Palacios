const Snoop = (props) => {
    return (
        <>
<div className="card mb-3 p-2" style={{"width": "100px;"}}>
  <div className="row g-5">
    <div className="col-md-2 ">
    <img src={props.imagen} className="card-img" alt={props.Titulo}/>
    </div>
    <div className="col-md-2 p-5 bg-light border-radius">
      <div className="card-body"> 
      <h5 className="card-title">{props.Titulo}</h5> 
      <p className="card-text">Moda urbana 2022</p>
      <ul className="list-group list-group-flush">
            <li className="list-group-item">precio: {props.Precio}</li>
            <li className="list-group-item">marca: {props.Marca}</li>
            <li className="list-group-item">envio: {props.Envio}</li>
      </ul>
        <a href="/" className="text-bg-success p-2">Comprar</a>
      </div>
    </div>
  </div>
</div>
        </>
    )
}
export default Snoop;