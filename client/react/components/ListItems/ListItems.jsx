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
          <p className="lineContainer">
            <span className="label">ID: </span>
            <span className="value">{item.id}</span>
          </p>
          <p className="lineContainer">
            <span className="label">Name: </span>
            <span className="value">{item.name}</span>
          </p>
          <p className="lineContainer">
            <span className="label">Type: </span>
            <span className="value">{item.type}</span>
          </p>
          <p className="lineContainer">
            <span className="label">Problem: </span>
            <span className="value">{item.problem}</span>
          </p>
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
