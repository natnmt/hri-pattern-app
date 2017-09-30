/* eslint-disable */
import fetch from 'isomorphic-fetch'
import { toggleLoadingVisibility } from './ToggleUIAction'
import { resetPattern, setSearchedPatterns, addMessage, resetMessage, resetSearchedPatterns } from './PatternAction'
import { unflatten, flatten } from '../utils/PatternStructure'
import { isJson } from '../utils/InputValidation'

export const savePattern = (pattern, onFinish) => (dispatch) => {
  dispatch(resetMessage())
  dispatch(resetSearchedPatterns())
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
    }
  })
}

export const updatePattern = (pattern, onFinish) => (dispatch, getState) => {
  const { pattern: { textSearch } } = getState();
  dispatch(resetMessage())
  dispatch(toggleLoadingVisibility(true))
  const newObject = Object.assign({}, pattern)
  if (newObject.hasOwnProperty('_id')) {
    delete newObject['_id']
  }
  Object.keys(newObject).forEach((key) => {
    if (newObject[key] === null || newObject[key].length === 0) {
      delete newObject[key]
    }
  })
  const data = unflatten(newObject)
  return fetch(`/database/update/${pattern._id}`, {
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
      dispatch(resetPattern())
      dispatch(searchPattern(textSearch))
      dispatch(toggleLoadingVisibility(false))
      onFinish()
    }
  })
}

export const persistPattern = (pattern, onFinish) => (dispatch) => {
  const newObject = Object.assign({}, pattern)
  Object.keys(newObject).forEach((key) => {
    if (newObject[key] === null || newObject[key].length === 0) {
      delete newObject[key]
    }
  })
  const data = unflatten(Object.assign({}, newObject))
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
      dispatch(resetPattern())
      dispatch(toggleLoadingVisibility(false))
      onFinish()
    }
  })
}

export const deletePattern = (patternId) => (dispatch, getState) => {
  const { pattern: { textSearch } } = getState();
  dispatch(resetMessage())
  dispatch(toggleLoadingVisibility(true))
  return fetch(`/database/delete/${patternId}`, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  })
  .then(response => {
    if (response.status >= 400) {
      dispatch(addMessage('Error deleting the pattern'))
      dispatch(toggleLoadingVisibility(false))
      throw new Error('Error deleting the pattern')
    }
    else {
      dispatch(resetPattern())
      dispatch(searchPattern(textSearch))
      dispatch(toggleLoadingVisibility(false))
    }
  })
}

export const searchPattern = (text) => (dispatch) => {
  dispatch(resetMessage())
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
    dispatch(setSearchedPatterns(flattenData))
    if (flattenData.length === 0) {
      dispatch(addMessage('No patterns found'))
    }
  })
}
