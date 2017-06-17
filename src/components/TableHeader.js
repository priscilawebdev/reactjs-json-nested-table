import React, { PropTypes as T } from 'react'

const TableHeader = ({
  item
} = {}) => (
  <th>{item}</th>
)

TableHeader.propTypes = {
  item: T.string.isRequired
}

export default TableHeader
