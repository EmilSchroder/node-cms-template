import React from 'react'
import {Hashrouter as Router, Route} from 'react-router-dom'

import Homepage from './Homepage'
import Blog from './Blog'

const App = () => {

      return(
        <Router>
          <div>
            <Route exact path='/' render={() => (
            <Homepage /> )
            } />
            <Route path='/blog' render={() => (
            <Blog /> )
            } />
          </div>
        </Router>
  )
}
export default App