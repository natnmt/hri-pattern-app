import React, { PropTypes } from 'react'
import { getInput } from '../../utils/InputValidation'
import FieldContainer from './FieldContainer'
import Label from './Label'

const GroupedForm = ({ items, pattern, onChangeInput, readOnly, editMode }) => {
  const fields = items.map((item) => {
    const value = pattern.hasOwnProperty(item.id) ? pattern[item.id] : ''
    const placeholder = item.hasOwnProperty('placeholder') ? item.placeholder : ''
    const newReadOnly = item.id === 'solution_layer.type' && pattern['solution_layer.solutions'].length > 1 ?
      (readOnly || editMode) : readOnly
    const content = getInput(item.id, item.type, item.inputType, value, onChangeInput, item.options, newReadOnly, placeholder)
    return (
      <FieldContainer key={item.id}>
        <Label>{item.label}</Label>
        {content}
      </FieldContainer>
    )
  })
  return (
    <div>
      {fields}
    </div>
  )
}

GroupedForm.propTypes = {
  items: PropTypes.array,
  readOnly: PropTypes.bool,
}

GroupedForm.defaultProps = {
  items: [],
  readOnly: false,
}

GroupedForm.displayName = 'GroupedForm'

export default GroupedForm
