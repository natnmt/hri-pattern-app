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
  clearCheckedItems = () => {
    this.setState({ checkedItems: [] })
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
        title="Select elements"
        visibility={visibility}
        onClose={onClose}
        cancelLabel="Cancel"
        onCancel={() => { onCancel(); this.clearCheckedItems() }}
        onConfirm={() => { onConfirm(this.state.checkedItems); this.clearCheckedItems() }}
        confirmLabel="OK"
      >
        <div className="propertyList">
          <p>Select the elements that you want to include in the pattern</p>
          {checkboxes}
        </div>
      </Dialog>
    )
  }
}

export default PropertiesDialog
