import React, { PropTypes as T } from 'react'

const TableHeading = ({
  moduleName = 'TableHeading',
  text,
  colSpan
} = {}) => (
  <tr className={moduleName}>
    <th colSpan={colSpan}>{text}</th>
  </tr>
)

TableHeading.propTypes = {
  text: T.string,
  colSpan: T.number.isRequired
}

export default TableHeading
