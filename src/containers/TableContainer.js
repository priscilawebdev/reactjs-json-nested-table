import React, { PropTypes as T } from 'react'
import { compose, pure, setPropTypes, withState } from 'recompose'
import { isEmpty } from 'lodash'
import Table from '../components/Table'
import TableHeader from '../components/TableHeader'
import TableRow from '../components/TableRow'
import TableHeading from '../components/TableHeading'
import TableArrowCell from '../components/TableArrowCell'
import RemoveButton from '../components/RemoveButton'

const getKids = (nodes, isKidsExpanded) => {
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
          expanded={isKidsExpanded}
        />
      )
    })
  }
  return kids
}

export const renderTableContainer = ({
  data,
  kids,
  heading = '',
  setIsKidsExpanded,
  isKidsExpanded,
  expanded,
  isVisible,
  setIsVisible
} = {}) => {
  // get headers **Object.keys**
  const header = Object.keys(data).map((row, index) => <TableHeader key={index} item={row} />)

  // get rows  **Object.values**
  const row = Object.values(data).map((row, index) => <TableRow key={index} record={row} />)

  // get general titles
  const generalTitles = !!heading && (<TableHeading colSpan={header.length + 1} text={heading} />)

  // get kids
  const children = getKids(kids, isKidsExpanded)

  // get arrow cell
  const arrowCell = (
    <TableArrowCell
      visible={!isEmpty(kids)}
      expanded={isKidsExpanded}
      handleClickEvent={() => setIsKidsExpanded(!isKidsExpanded)}
    />
  )

  const removeButton = (
    <RemoveButton handleClickEvent={() => setIsVisible(!isVisible)} />
  )

  return (
    <Table
      header={header}
      row={row}
      kids={children}
      kidsColSpan={header.length + 1}
      heading={generalTitles}
      arrowCell={arrowCell}
      expanded={expanded}
      visible={isVisible}
      removeButton={removeButton}
    />
  )
}

const propTypes = {
  data: T.object.isRequired,
  kids: T.object,
  heading: T.string,
  isKidsExpanded: T.bool,
  visible: T.bool
}

const TableContainer = compose(
  setPropTypes(propTypes),
  pure,
  withState('isKidsExpanded', 'setIsKidsExpanded', false),
  withState('isVisible', 'setIsVisible', true)
)(renderTableContainer)

export default TableContainer
