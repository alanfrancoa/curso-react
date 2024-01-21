import {Link} from 'react-router-dom'

const CheckOut = () => {
  return (
    <div className="container">
      <h3>Terminar compra</h3>
      <hr />
      <form>
        <div className="form-group mt-3">
          <label htmlFor="email">E-mail:</label>
          <input className='form-control' type='email' id='email' name='email' required />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="nombre">Nombre:</label>
          <input className='form-control' type='text' id='nombre' name='nombre' required />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="apellido">Apellido:</label>
          <input className='form-control' type='text' id='apellido' name='apellido' required />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="telefono">Telefono:</label>
          <input className='form-control' type='' id='telefono' name='telefono' required />
        </div>
        <div className="form-group mt-3">
          <button className='btn btn-success'>Finalizar Compra</button>
          <Link to='/cart' className='btn btn-info float-end'>Volver al carrito</Link>
        </div>
      </form>
    </div>
  )
}

export default CheckOut