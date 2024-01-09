import PropTypes from 'prop-types'
import './UsersList.css'
const UsersList = ({users}) => {

  return (
    <div className="list">
        {
            users && users.map(({id, name, email},index)=>(
                <div key={index} className='itemList'>
                    <span>{id}-</span>
                    <span>{name}</span>
                    <span>{email}</span>
                </div>
            ))
        }
    </div>
  )
}

UsersList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired
        })
    ).isRequired,
}

export default UsersList