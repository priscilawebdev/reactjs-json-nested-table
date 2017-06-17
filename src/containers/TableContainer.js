import React, { PropTypes as T } from 'react'
import { compose, pure, setPropTypes } from 'recompose'
import { isEmpty } from 'lodash'
import Table from '../components/Table'
import TableHeader from '../components/TableHeader'
import TableRow from '../components/TableRow'
import TableHeading from '../components/TableHeading'

const getKids = (nodes) => {
  let kids

  if (!isEmpty(nodes)) {
    const generalTitles = Object.keys(nodes)[0]

    // map kids to nested tables
    kids = nodes[generalTitles].records.map((result, index) => {
      return (
        <TableContainer
          key={index}
          data={result.data}
          kids={result.kids}
          heading={generalTitles}
        />
      )
    })
  }
  return kids
}

export const renderTableContainer = ({
  data,
  kids,
  heading = ''
} = {}) => {
  // get headers **Object.keys**
  const header = Object.keys(data).map((row, index) => <TableHeader key={index} item={row} />)

  // get rows  **Object.values**
  const row = Object.values(data).map((row, index) => <TableRow key={index} record={row} />)

  // get general titles
  const generalTitles = !!heading && (<TableHeading colSpan={header.length + 1} text={heading} />)

  // get kids
  const children = getKids(kids)

  return (
    <Table
      header={header}
      row={row}
      kids={children}
      kidsColSpan={header.length + 1}
      heading={generalTitles}
    />
  )
}

const propTypes = {
  data: T.object.isRequired,
  kids: T.object,
  heading: T.string,
  expandedAll: T.bool
}

const TableContainer = compose(
  setPropTypes(propTypes),
  pure
)(renderTableContainer)

export default TableContainer
