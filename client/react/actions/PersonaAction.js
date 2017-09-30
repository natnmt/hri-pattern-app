export const SET_PERSONA_OBJECT = 'SET_PERSONA_OBJECT'
export const setPersonaObject = (persona) => ({
  type: SET_PERSONA_OBJECT,
  payload: {
    persona,
  },
})

export const UPDATE_PERSONA_PROPERTY = 'UPDATE_PERSONA_PROPERTY'
export const updatePersonaProperty = (key, value) => ({
  type: UPDATE_PERSONA_PROPERTY,
  payload: {
    key,
    value,
  },
})

export const SET_TEXT_SEARCH_PERSONA = 'SET_TEXT_SEARCH_PERSONA'
export const setTextSearchPersona = (id) => ({
  type: SET_TEXT_SEARCH_PERSONA,
  payload: {
    id,
  },
})

export const SET_SEARCHED_PERSONAS = 'SET_SEARCHED_PERSONAS'
export const setSearchedPersonas = (personas) => ({
  type: SET_SEARCHED_PERSONAS,
  payload: {
    personas,
  },
})

export const RESET_PERSONA = 'RESET_PERSONA'
export const resetPersona = () => ({
  type: RESET_PERSONA,
})

export const ADD_PERSONA_MESSAGE = 'ADD_PERSONA_MESSAGE'
export const addMessage = (message) => ({
  type: ADD_PERSONA_MESSAGE,
  payload: {
    message,
  },
})

export const RESET_SEARCHED_PERSONAS = 'RESET_SEARCHED_PERSONAS'
export const resetSearchedPersonas = (message) => ({
  type: RESET_SEARCHED_PERSONAS,
})

export const RESET_PERSONA_MESSAGE = 'RESET_PERSONA_MESSAGE'
export const resetMessage = (message) => ({
  type: RESET_PERSONA_MESSAGE,
})
