import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './ListItems.css'

const ListItems = ({ items, onViewClick, onEditClick, linkView, linkEdit }) => {
  const listItem = items.map((item, index) => {
    const viewButton = (
      <Button
        onClick={() => onViewClick(item.id)}
        icon="view"
        secondaryColor
      />
    )
    const viewElement = linkView ? <Link to={linkView}>{viewButton}</Link> : viewButton
    const editButton = (
      <Button
        onClick={() => onEditClick(item.id)}
        icon="edit"
        secondaryColor
      />
    )
    const editElement = linkEdit ? <Link to={linkEdit}>{editButton}</Link> : editButton
    return (
      <div className="item" key={index}>
        <div className="info">
          <p><span className="label">ID: </span>{item.id}</p>
          <p><span className="label">Name: </span>{item.name}</p>
          <p><span className="label">Type: </span>{item.type}</p>
          <p><span className="label">Problem: </span>{item.problem}</p>
        </div>
        <div className="buttons">
          {viewElement}
          {editElement}
        </div>
      </div>
    )
  })
  return (
    <div className="ListItems">
      {listItem}
    </div>
  )
}

ListItems.propTypes = {
  items: PropTypes.array,
}

ListItems.defaultProps = {
  items: [],
}

export default ListItems
