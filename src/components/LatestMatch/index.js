// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props

    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatch
    return (
      <div>
        <h1 className="heading">Latest Matches</h1>
        <div className="match-card">
          <div className="div">
            <p className="details">{competingTeam}</p>
            <p className="details">{date}</p>
            <p className="details">{venue}</p>
            <p className="details">{result}</p>
          </div>
          <div className="div">
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="team-logo"
            />
          </div>
          <div className="div">
            <p className="details">First Innings</p>
            <p className="details">{firstInnings}</p>
            <p className="details">Second Innings</p>
            <p className="details">{secondInnings}</p>
            <p className="details">Man Of The Match</p>
            <p className="details">{manOfTheMatch}</p>
            <p className="details">Umpires</p>
            <p className="details">{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
