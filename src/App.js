import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import Route from './components/Route'

const fromHomeToWork = gql`
{
  plan(
    from: {lat: 60.315162, lon: 25.009745}
    to: {lat: 60.169371, lon: 24.925728}
    numItineraries: 2
    minTransferTime: 600
  ) {
    itineraries {
      startTime
      endTime
      walkDistance
      duration
      legs {
        from {
          name
        }
        to {
          name
        }
        startTime
        endTime
        mode
        duration
        distance
        route {
          shortName
        }
      }
    }
  }
}
`

const App = () => {

  return <Query query={fromHomeToWork}>
    {(result) => <Route result={result} />}
  </Query>

}

export default App;
