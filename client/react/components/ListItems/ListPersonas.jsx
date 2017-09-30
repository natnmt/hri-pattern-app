import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './ListItems.css'

const ListPersonas = ({ items, onViewClick, onEditClick, onDeleteClick, linkView, linkEdit }) => {
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
          <p><span className="label">Name: </span>{item.name}</p>
          <p><span className="label">Age: </span>{item.age}</p>
          <p><span className="label">Biography: </span>{item.biography}</p>
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

ListPersonas.propTypes = {
  items: PropTypes.array,
}

ListPersonas.defaultProps = {
  items: [],
}

export default ListPersonas
