import React, { PropTypes as T } from 'react'

const TableArrowCell = ({
  expanded = false,
  visible,
  handleClickEvent
} = {}) => (
  visible ? (
    <i
      className={`glyphicon glyphicon-triangle-${expanded ? 'bottom' : 'right'}`}
      onClick={handleClickEvent}
      style={{cursor: 'pointer'}}
    />
  ) : (
    <i className='glyphicon glyphicon-star invisible' />
  )
)

TableArrowCell.propTypes = {
  expanded: T.bool,
  visible: T.bool,
  handleClickEvent: T.func.isRequired
}

export default TableArrowCell
