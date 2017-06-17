import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import TableContainer from './containers/TableContainer'

const App = () => (
  <BrowserRouter>
    <div className='app'>
      <Match exactly pattern='/' component={TableContainer} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'))
