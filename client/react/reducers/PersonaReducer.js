import update from 'react-addons-update'
import {
  SET_PERSONA_OBJECT, UPDATE_PERSONA_PROPERTY, RESET_PERSONA, RESET_SEARCHED_PERSONAS,
  SET_SEARCHED_PERSONAS, ADD_PERSONA_MESSAGE, RESET_PERSONA_MESSAGE, SET_TEXT_SEARCH_PERSONA,
} from '../actions/PersonaAction'

const personaObject = {
  name: '',
  age: '',
  biography: '',
  information: '',
}

const initialState = {
  personaToBeSaved: personaObject,
  searchedPersonas: [],
  textSearch: '',
  message: [],
}

export const persona = (state = initialState, action) => {
  switch (action.type) {
    case SET_PERSONA_OBJECT:
      return update(state, {
        personaToBeSaved: {
          $set: action.payload.persona,
        },
      })
    case UPDATE_PERSONA_PROPERTY: {
      return update(state, {
        personaToBeSaved: {
          [action.payload.key]: {
            $set: action.payload.value,
          },
        },
      })
    }
    case RESET_PERSONA:
      return update(state, {
        personaToBeSaved: {
          $set: personaObject,
        },
        message: {
          $set: [],
        },
      })
    case RESET_PERSONA_MESSAGE:
      return update(state, {
        message: {
          $set: [],
        },
      })
    case SET_TEXT_SEARCH_PERSONA:
      return update(state, {
        textSearch: {
          $set: action.payload.id,
        },
      })
    case RESET_SEARCHED_PERSONAS:
      return update(state, {
        textSearch: {
          $set: '',
        },
        searchedPersonas: {
          $set: [],
        },
      })
    case SET_SEARCHED_PERSONAS:
      return update(state, {
        searchedPersonas: {
          $set: action.payload.personas,
        },
      })
    case ADD_PERSONA_MESSAGE: {
      const newMessageArr = state.message.slice(0);
      newMessageArr.push(action.payload.message)
      return update(state, {
        message: {
          $set: newMessageArr,
        },
      })
    }
    default:
      return state
  }
}
