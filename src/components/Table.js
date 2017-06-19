import React, { PropTypes as T } from 'react'

const Table = ({
  moduleName = 'Table',
  header,
  row,
  kids,
  kidsColSpan,
  heading,
  expanded = true,
  visible = true,
  arrowCell,
  removeButton
} = {}) => (
  <div className={moduleName}>
    <div className={`collapse ${expanded ? 'in' : 'hidden'} ${!visible ? 'hide' : ''}`}>
      <table className='table table-bordered table-stripe'>
        <thead>
          {heading}
          <tr>
            <th>{removeButton}</th>
            {header}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-center'>{arrowCell}</td>
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
  arrowCell: T.node.isRequired,
  kids: T.arrayOf(T.object),
  kidsColSpan: T.number.isRequired,
  heading: T.node,
  removeButton: T.node
}

export default Table
