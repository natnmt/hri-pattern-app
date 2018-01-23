import React from 'react'
import Input from '../components/Form/Input'
import TextArea from '../components/Form/TextArea'
// import TextArea from '../components/Form/TextArea'

export const getInput = (key, type, value, onChange, options, readOnly, placeholder) => {
  let input = null
  switch (type) {
    case 'json':
      input = (
        <TextArea
          type={type}
          name={key}
          value={value}
          onChange={(event) => onChange(key, event.target.value)}
          isValid={false}
          required
          placeholder={placeholder}
          readOnly={readOnly}
        />
      )
      break
    case 'select':
      input = (
        <select value={value} onChange={(event) => onChange(key, event.target.value)} readOnly={readOnly}>
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
          onChange={(event) => onChange(key, event.target.value)}
          isValid={false}
          required
          placeholder={placeholder}
          readOnly={readOnly}
        />
      )
    )
  }
  return input
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
