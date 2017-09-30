import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './ListItems.css'

const ListPatterns = ({ items, onViewClick, onEditClick, onDeleteClick, linkView, linkEdit }) => {
  const listItem = items.map((item, index) => {
    const viewButton = (
      <Button
        onClick={() => onViewClick(item)}
        icon="view"
        secondaryColor
      />
    )
    const viewElement = linkView ? <Link to={linkView}>{viewButton}</Link> : viewButton
    const editButton = (
      <Button
        onClick={() => onEditClick(item)}
        icon="edit"
        secondaryColor
      />
    )
    const editElement = linkEdit ? <Link to={linkEdit}>{editButton}</Link> : editButton
    const deleteButton = (
      <Button
        onClick={() => onDeleteClick(item._id)}
        icon="remove"
        secondaryColor
      />
    )
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
          {deleteButton}
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

ListPatterns.propTypes = {
  items: PropTypes.array,
}

ListPatterns.defaultProps = {
  items: [],
}

export default ListPatterns