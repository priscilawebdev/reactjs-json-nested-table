import React, { PropTypes as T } from 'react'
import { Link } from 'react-router-dom'

const Table = ({
  moduleName = 'Table',
  header,
  row,
  kids,
  kidsColSpan,
  heading
} = {}) => (
  <div className={moduleName}>
    <div className='col-md-12'>
      <table className='table table-bordered table-striped'>
        <thead>
          {heading}
          <tr className='success'>
            <th>
              <Link to='/'>
                <i className='fa fa-trash-o fa-lg' />
              </Link>
            </th>
            {header}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to='/'>
                <i className='fa fa-arrow-circle-o-right fa-lg' />
              </Link>
            </td>
            {row}
          </tr>
          <tr>
            <td colSpan={kidsColSpan}>
              {kids}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

Table.propTypes = {
  header: T.node.isRequired,
  row: T.node.isRequired,
  kids: T.arrayOf(T.object),
  kidsColSpan: T.number.isRequired,
  heading: T.node
}

export default Table
