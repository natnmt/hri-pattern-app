import React from 'react'
import Input from '../components/Form/Input'
import TextArea from '../components/Form/TextArea'
import Button from '../components/Button/Button'
// import TextArea from '../components/Form/TextArea'

export const getInput = (key, type, inputType, value, isRequired, onChange, onDelete, options, readOnly, placeholder, solutionIndex, hfIndex) => {
  let input = null
  const deleteButton = !readOnly && !isRequired ? (
    <Button
      onClick={() => onDelete(key, solutionIndex, hfIndex)}
      icon="remove"
      secondaryColor
    />
  ) : null
  switch (inputType) {
    case 'textarea':
      input = (
        <TextArea
          type={type}
          name={key}
          value={value}
          onChange={(event) => onChange(key, event.target.value, solutionIndex, hfIndex)}
          isValid={false}
          required
          placeholder={placeholder}
          readOnly={readOnly}
          className={type === 'json' ? 'textareaJson' : 'textareaString'}
        />
      )
      break
    case 'select':
      input = (
        <select value={value} onChange={(event) => onChange(key, event.target.value, solutionIndex, hfIndex)} readOnly={readOnly}>
          <option key="default" value="">
            Select an option
          </option>
          {options.map(item => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
      )
      break
    default: (
      input = (
        <Input
          type={type}
          name={key}
          value={value}
          onChange={(event) => onChange(key, event.target.value, solutionIndex, hfIndex)}
          isValid={false}
          required
          placeholder={placeholder}
          readOnly={readOnly}
        />
      )
    )
  }
  return (
    <span style={{ display: 'flex' }}>{input}{deleteButton}</span>
  )
}

const solutionsId = 'solution_layer.solutions'
const hfId = 'solution_layer.solutions.human_factors'

export const getInputValue = (pattern, id, solutionIndex, hfIndex) => {
  if (!Number.isInteger(solutionIndex)) {
    return pattern.hasOwnProperty(id) ? pattern[id] : ''
  }
  else {
    if (!Number.isInteger(hfIndex)) {
      return pattern[solutionsId][solutionIndex][id]
    }
    else {
      return pattern[solutionsId][solutionIndex][hfId][hfIndex][id]
    }
  }
}

export const isValidVarName = (str) => {
  const specialCharacters = ['!', '@', '#', '$', '%', 'ˆ', '&', '*', '(', ')', '-', '=',
    '+', ':', ';', '"', '\'', '\\', '/', '?', '<', '>', '~', '[', ']', '{', '}', '\'', ',', ' ']
  // To avoid exploits
  if (specialCharacters.some(spChar => str.includes(spChar))) {
    return false
  }
  try {
    new Function(`var ${str.split('.').pop()}`)() // eslint-disable-line no-new-func
  }
  catch (e) {
    return false
  }
  return true
}

export const isNotEmpty = (str) => {
  if (str.trim().length > 0) {
    return true
  }
  return false
}

export const isNumberZeroToTen = (value) => {
  if (value < 0 || value > 10) {
    return false
  }
  return true
}

export const isJson = (str) => {
  try {
    JSON.parse(str)
  }
  catch (e) {
    return false
  }
  return true
}
