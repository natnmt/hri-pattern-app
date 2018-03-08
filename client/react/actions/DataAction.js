/* eslint-disable */
import fetch from 'isomorphic-fetch'
import { toggleLoadingVisibility } from './ToggleUIAction'
import { resetPattern, setUnflattenSearchedPatterns, addMessage, resetMessage, resetSearchedPattern } from './PatternAction'
import { unflatten, flatten } from '../utils/PatternStructure'
import { isJson } from '../utils/InputValidation'

export const savePattern = (pattern, onFinish) => (dispatch) => {
  dispatch(resetMessage())
  dispatch(toggleLoadingVisibility(true))
  return fetch(`/database/find/${pattern.id}`)
  .then(response => {
    if (response.status >= 400) {
      dispatch(addMessage('Bad request response from server'))
      dispatch(toggleLoadingVisibility(false))
      throw new Error('Bad request response from server')
    }
    return response.text().then((text) => {
      return isJson(text) ? JSON.parse(text) : {}
    })
  })
  .then(json => {
    if (!json.hasOwnProperty('id')) {
      dispatch(persistPattern(pattern, onFinish))
    }
    else {
      dispatch(addMessage('Error saving the pattern. The "ID" already exist, please create another ID.'))
      dispatch(toggleLoadingVisibility(false))
      dispatch(resetPattern())
      dispatch(resetSearchedPattern())
    }
  })
}


export const updatePattern = (pattern, onFinish) => (dispatch) => {
  console.log('updatePattern')
  dispatch(resetMessage())
  dispatch(toggleLoadingVisibility(true))
  const newObject = Object.assign({}, pattern)
  console.log(newObject)
  const id = newObject.hasOwnProperty('_id') ? newObject['_id'] : pattern.id
  if (newObject.hasOwnProperty('_id')) {
    delete newObject['_id']
  }
  const data = unflatten(newObject)
  return fetch(`/database/update/${id}`, {
    method: "PUT",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.status >= 400) {
      dispatch(addMessage('Error updating the pattern'))
      dispatch(toggleLoadingVisibility(false))
      throw new Error('Error updating the pattern')
    }
    else {
      dispatch(toggleLoadingVisibility(false))
      dispatch(resetPattern())
      dispatch(resetSearchedPattern())
      onFinish()
    }
  })
}

export const persistPattern = (pattern, onFinish) => (dispatch) => {
  const data = unflatten(Object.assign({}, pattern))
  fetch('/database/insert', {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.status >= 400) {
      dispatch(addMessage('Error saving the pattern'))
      dispatch(toggleLoadingVisibility(false))
      throw new Error('Error saving the pattern')
    }
    else {
      dispatch(toggleLoadingVisibility(false))
      dispatch(resetPattern())
      dispatch(resetSearchedPattern())
      onFinish()
    }
  })
}

export const searchPattern = (text) => (dispatch) => {
  return fetch(`/database/search/${text}`)
  .then(response => {
    if (response.status >= 400) {
      throw new Error('Bad request response from server')
    }
    return response.text().then((text) => {
      return isJson(text) ? JSON.parse(text) : {}
    })
  })
  .then(json => {
    const flattenData = json.map(item => flatten(Object.assign({}, item)))
    dispatch(setUnflattenSearchedPatterns(flattenData))
  })
}
