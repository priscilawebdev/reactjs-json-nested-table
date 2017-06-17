import React, { PropTypes as T } from 'react'

const Table = ({
  moduleName = 'Table',
  header,
  row
} = {}) => (
  <div className={moduleName}>
    <div className='col-md-12'>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr className='success'>
            {header}
          </tr>
        </thead>
        <tbody>
          <tr>
            {row}
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

Table.propTypes = {
  header: T.arrayOf(T.element).isRequired,
  row: T.arrayOf(T.element).isRequired
}

export default Table
