import React from 'react'
import {Hashrouter as Router, Route, Link} from 'react-router-dom'

import Homepage from './Homepage'
import Blog from './Blog'

class App extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
      return(
        <Router>
          <React.Fragment>
            <Route exact path='/' render={(props) => (
            <Homepage /> )
            } />
            <Route path='/blog' render={(props) => (
            <Blog /> )
            } />
          </React.Fragment>
        </Router>
  )
  }

}

export default App
