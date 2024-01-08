import PropTypes from 'prop-types'
import './card.css'

const CompanyCard = ({company}) => {

    const { bs, catchPhrase, name } = company
  return (
    <div className='user-card'>
        <h2>Empresa:</h2>
        <span>{`Nombre: ${name}`}</span>
        <span>{`Slogan: ${catchPhrase}`}</span>
        <span>{`Descripcion: ${bs}`}</span>
    </div>
  )
}

CompanyCard.propTypes = {
    company: PropTypes.shape({
        bs: PropTypes.string.isRequired,
        catchPhrase: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

export default CompanyCard