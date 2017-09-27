import React, { PropTypes } from 'react'
import { getInput } from '../../utils/InputValidation'
import FieldContainer from '../../components/Form/FieldContainer'

const ObjectForm = ({ items, pattern, onChangeInput }) => {
  const fields = items.map((item) => {
    const newType = item.options ? 'select' : item.type
    const value = pattern.hasOwnProperty(item.id) ? pattern[item.id] : ''
    const input = getInput(item.id, newType, item.inputType, value, onChangeInput, item.options)
    return (<div key={item.id}>
      {input}
    </div>)
  })
  return (
    <FieldContainer>
      {fields}
    </FieldContainer>
  )
}

ObjectForm.propTypes = {
  items: PropTypes.array,
}

ObjectForm.displayName = 'ObjectForm'

export default ObjectForm
