import PropTypes from 'prop-types'
import './card.css'

const AddressCard = ({address}) => {

    const { city, street, suite, zipcode } = address
  return (
    <div className='user-card'>
        <h2>Direccion:</h2>
        <span>{`Ciudad: ${city}`}</span>
        <span>{`Calle: ${street}`}</span>
        <span>{`Suite: ${suite}`}</span>
        <span>{`Codigo Postal: ${zipcode}`}</span>
    </div>
  )
}

AddressCard.propTypes = {
    address: PropTypes.shape({
        city: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        suite: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
    }).isRequired,
};

export default AddressCard