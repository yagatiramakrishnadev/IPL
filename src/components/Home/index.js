// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({teamsList: updatedData, isLoading: false})
  }

  renderedData = () => {
    const {teamsList} = this.state
    return (
      <div>
        <div>
          <div className="flex">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logo"
            />
            <h1 className="heading">IPL Dashboard</h1>
          </div>

          <ul className="ul">
            {teamsList.map(eachTeam => (
              <TeamCard key={eachTeam.id} team={eachTeam} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  getLoader = () => (
    <div className="loader-container">
      <Loader
        testid="loader"
        type="Oval"
        color="#ffffff"
        height={50}
        width={50}
      />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container">
        {isLoading ? this.getLoader() : this.renderedData()}
      </div>
    )
  }
}

export default Home
