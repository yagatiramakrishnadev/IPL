// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props
  const {id, name, teamImageUrl} = team

  return (
    <Link to={`/team-matches/${id}`} className="list-item">
      <div className="team-container">
        <div className="flex">
          <img src={teamImageUrl} alt={name} className="team-logo" />
          <p className="name">{name}</p>
        </div>
      </div>
    </Link>
  )
}

export default TeamCard
