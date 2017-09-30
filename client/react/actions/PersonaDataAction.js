/* eslint-disable */
import fetch from 'isomorphic-fetch'
import { toggleLoadingVisibility } from './ToggleUIAction'
import { resetPersona, setSearchedPersonas, addMessage, resetMessage, resetSearchedPersonas } from './PersonaAction'
import { isJson } from '../utils/InputValidation'

export const savePersona = (persona, onFinish) => (dispatch) => {
  dispatch(resetMessage())
  dispatch(resetSearchedPersonas())
  dispatch(toggleLoadingVisibility(true))
  fetch('/database/persona/insert', {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(persona)
  })
  .then(response => {
    if (response.status >= 400) {
      dispatch(addMessage('Error saving the persona'))
      dispatch(toggleLoadingVisibility(false))
      throw new Error('Error saving the persona')
    }
    else {
      dispatch(toggleLoadingVisibility(false))
      dispatch(resetPersona())
      onFinish()
    }
  })
}

export const updatePersona = (persona, onFinish) => (dispatch, getState) => {
  const { persona: { textSearch } } = getState();
  dispatch(resetMessage())
  dispatch(toggleLoadingVisibility(true))
  const newObject = Object.assign({}, persona)
  if (newObject.hasOwnProperty('_id')) {
    delete newObject['_id']
  }
  return fetch(`/database/persona/update/${persona._id}`, {
    method: "PUT",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newObject)
  })
  .then(response => {
    if (response.status >= 400) {
      dispatch(addMessage('Error updating the persona'))
      dispatch(toggleLoadingVisibility(false))
      throw new Error('Error updating the persona')
    }
    else {
      dispatch(resetPersona())
      onFinish()
      dispatch(searchPersona(textSearch))
      dispatch(toggleLoadingVisibility(false))
    }
  })
}

export const deletePersona = (personaId) => (dispatch, getState) => {
  const { persona: { textSearch } } = getState();
  dispatch(resetMessage())
  dispatch(toggleLoadingVisibility(true))
  return fetch(`/database/persona/delete/${personaId}`, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  })
  .then(response => {
    if (response.status >= 400) {
      dispatch(addMessage('Error deleting the persona'))
      dispatch(toggleLoadingVisibility(false))
      throw new Error('Error deleting the persona')
    }
    else {
      dispatch(searchPersona(textSearch))
      dispatch(toggleLoadingVisibility(false))
      dispatch(resetPersona())
    }
  })
}

export const searchPersona = (text) => (dispatch) => {
  dispatch(resetMessage())
  return fetch(`/database/persona/search/${text}`)
  .then(response => {
    if (response.status >= 400) {
      throw new Error('Bad request response from server')
    }
    return response.text().then((text) => {
      return isJson(text) ? JSON.parse(text) : {}
    })
  })
  .then(json => {
    dispatch(setSearchedPersonas(json))
    if (json.length === 0) {
      dispatch(addMessage('No patterns found'))
    }
  })
}
