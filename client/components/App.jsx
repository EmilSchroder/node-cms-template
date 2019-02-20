import React from 'react'
import {Hashrouter as Router, Route, Link} from 'react-router-dom'

const App = () => {

  return(
    <Router>
      <React.Fragment>
        <Route exact path='/' render={<Homepage />} />
        {/* <About />
        <Products /> */}
        <Route path='blog' render={<Blog />} />
        {/* <Config /> */}
      </React.Fragment>
    </Router>
  )
}

export default App
