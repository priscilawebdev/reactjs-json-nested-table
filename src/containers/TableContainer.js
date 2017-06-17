import React, { PropTypes as T } from 'react'
import { compose, pure, setPropTypes } from 'recompose'
import { isEmpty } from 'lodash'
import Table from '../components/Table'
import TableHeader from '../components/TableHeader'
import TableRow from '../components/TableRow'

const getKids = (nodes) => {
  let kids

  if (!isEmpty(nodes)) {
    const tableCaption = Object.keys(nodes)[0]

    // map kids to nested tables
    kids = nodes[tableCaption].records.map((result, index) => {
      return (
        <TableContainer
          key={index}
          data={result.data}
          kids={result.kids}
        />
      )
    })
  }

  return kids
}

export const renderTableContainer = ({
  moduleName = 'TableContainer',
  data,
  kids
} = {}) => {
  // get headers **Object.keys**
  const header = Object.keys(data).map((row, index) => <TableHeader key={index} item={row} />)

  // get rows  **Object.values**
  const row = Object.values(data).map((row, index) => <TableRow key={index} record={row} />)

  // get kids
  const children = getKids(kids)

  return (
    <Table
      header={header}
      row={row}
      kids={children}
    />
  )
}

const propTypes = {
  data: T.object.isRequired,
  kids: T.object,
  expandedAll: T.bool
}

const TableContainer = compose(
  setPropTypes(propTypes),
  pure
)(renderTableContainer)

export default TableContainer

