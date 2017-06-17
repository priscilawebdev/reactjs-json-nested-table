import React, { PropTypes as T } from 'react'

const TableRow = ({
  record
} = {}) => (
  <td>{record}</td>
)

TableRow.propTypes = {
  record: T.string.isRequired
}

export default TableRow
