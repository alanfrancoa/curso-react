import PropTypes from 'prop-types'
import './card.css'

const Card = ({user}) => {

    const { id, name, phone, username, website } = user
  return (
    <div className='user-card'>
        <h2>{`ID: ${id}`}</h2>
        <span>{`Nombre: ${name}`}</span>
        <span>{`Usuario: ${username}`}</span>
        <span>{`Telefono: ${phone}`}</span>
        <span>{`Sitio: ${website}`}</span>
    </div>
  )
}

Card.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card