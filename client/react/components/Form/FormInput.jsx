import React, { PropTypes } from 'react'
import { getInput } from '../../utils/InputValidation'
import Accordion from '../Accordion/Accordion'
import Button from '../Button/Button'
import FieldContainer from './FieldContainer'
import GroupedForm from './GroupedForm'
import Label from './Label'

const FormInput = ({ fields, pattern, onChange, onAddProperty, readOnly, editMode }) => {
  const formFields = fields.map((item, idx) => {
    let input = null
    const isNewSection = item.children
    const placeholder = item.hasOwnProperty('placeholder') ? item.placeholder : ''
    if (!item.children) {
      const newType = item.options ? 'select' : item.type
      const value = pattern.hasOwnProperty(item.id) ? pattern[item.id] : ''
      const newReadOnly = item.id === 'id' ? (readOnly || editMode) : readOnly
      input = getInput(item.id, newType, value, onChange, item.options, newReadOnly, placeholder)
    }
    else {
      input = <FormInput
        fields={item.children}
        pattern={pattern}
        onChange={onChange}
        onAddProperty={onAddProperty}
        readOnly={readOnly}
        editMode={editMode}
      />
    }
    const content = isNewSection ? (
      <Accordion startsExpanded title={item.label}>
        {input}
        {!readOnly ? (
          <Button
            onClick={() => onAddProperty(item.id)}
            icon="add"
            iconPosition="left"
          >
            Add another property
          </Button>
        ) : null}
      </Accordion>
    ) : (
      <FieldContainer>
        <Label>{item.label}</Label>
        {input}
      </FieldContainer>
    )
    return (
      <div key={idx}>
        {content}
      </div>
    )
  })
  return (
    <div>
      {formFields}
    </div>
  )
}

FormInput.propTypes = {
  fields: PropTypes.array,
  onChange: PropTypes.func,
  onAddProperty: PropTypes.func,
  readOnly: PropTypes.bool,
  editMode: PropTypes.bool,
}

FormInput.defaultProps = {
  readOnly: false,
  editMode: false,
  fields: '',
}

FormInput.displayName = 'FormInput'

export default FormInput
