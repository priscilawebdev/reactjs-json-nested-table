import React, { PropTypes as T } from 'react'

const RemoveButton = ({
  handleClickEvent
} = {}) => (
  <i
    className='btn btn-danger glyphicon glyphicon-remove'
    onClick={handleClickEvent}
    style={{cursor: 'pointer'}}
  />
)

RemoveButton.propTypes = {
  handleClickEvent: T.func.isRequired
}

export default RemoveButton
