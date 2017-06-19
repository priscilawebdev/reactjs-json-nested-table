import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TableContainer from './containers/TableContainer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles.sass'
import preload from '../public/data'

const App = () => (
  <Router>
    <div>
      <Route
        exact
        path='/'
        component={() => (
          <div>
            {
              preload.map((info, index) => (
                <TableContainer
                  key={index}
                  data={info.data}
                  kids={info.kids}
                />
              ))
            }
          </div>
        )}
      />
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
