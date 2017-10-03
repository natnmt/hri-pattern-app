import React, { Component } from 'react'
import Dialog from './Dialog'
import './PropertiesDialog.css'

class PropertiesDialog extends Component {
  constructor() {
    super()
    this.state = {
      checkedItems: [],
    }
  }

  componentWillReceiveProps = (nextProps) => {
    const { checkedItems } = this.state
    const items = checkedItems.slice(0, checkedItems.length);
    items.forEach((item, idx) => {
      const index = nextProps.properties.findIndex(prop => prop.id ===  item.id)
      if (index < 0) {
        this.setState({
          checkedItems: [...items.slice(0, idx), ...items.slice(idx + 1, items.length)]
        })
      }
    })
  }

  onCheckBoxChange = (event) => {
    const value = event.target.checked
    const id = event.target.name
    const newArray = this.state.checkedItems
    if (value) {
      newArray.push(this.props.properties.find(item => item.id === id))
      this.setState({
        checkedItems: newArray,
      })
    }
    else {
      const idx = newArray.findIndex(item => item.id === id)
      newArray.splice(idx, 1)
      this.setState({ checkedItems: newArray })
    }
  }
  render = () => {
    const { properties, visibility, onCancel, onConfirm, onClose } = this.props
    const checkboxes = (
      properties.map(item =>
        <div key={item.id}>
          <input
            type="checkbox"
            name={item.id}
            onChange={this.onCheckBoxChange}
          />
          <span>{item.label}</span>
        </div>
      )
    )
    return (
      <Dialog
        title="Select properties"
        visibility={visibility}
        onClose={onClose}
        cancelLabel="Cancel"
        onCancel={onCancel}
        onConfirm={() => onConfirm(this.state.checkedItems)}
        confirmLabel="OK"
      >
        <div className="propertyList">
          <p>Select the properties that you want to include in the pattern</p>
          {checkboxes}
        </div>
      </Dialog>
    )
  }
}

export default PropertiesDialog
