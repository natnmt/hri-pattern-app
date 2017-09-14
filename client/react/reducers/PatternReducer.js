import update from 'react-addons-update'
import {
  SET_PATTERN_OBJECT, UPDATE_PATTERN_PROPERTY, RESET_PATTERN, ADD_PATTERN_PROPERTY,
  REMOVE_PATTERN_PROPERTY, SET_SEARCHED_PATTERNS, ADD_MESSAGE, RESET_MESSAGE,
} from '../actions/PatternAction'
import { patternReducerStructure } from '../utils/PatternStructure'

const initialState = {
  patternToBeSaved: patternReducerStructure,
  searchedPatterns: [],
  message: [],
}

export const pattern = (state = initialState, action) => {
  switch (action.type) {
    case SET_PATTERN_OBJECT:
      return update(state, {
        patternToBeSaved: {
          $set: action.payload.pattern,
        },
      })
    case UPDATE_PATTERN_PROPERTY: {
      return update(state, {
        patternToBeSaved: {
          [action.payload.key]: {
            $set: action.payload.value,
          },
        },
      })
    }
    case ADD_PATTERN_PROPERTY: {
      return update(state, {
        patternToBeSaved: {
          $set: Object.assign({}, state.patternToBeSaved, { [action.payload.key]: action.payload.value }),
        },
      })
    }
    case REMOVE_PATTERN_PROPERTY: {
      const newState = Object.assign({}, state.patternToBeSaved)
      delete newState[action.payload.key]
      return update(state, {
        patternToBeSaved: {
          $set: newState,
        },
      })
    }
    case RESET_PATTERN:
      return update(state, {
        patternToBeSaved: {
          $set: patternReducerStructure,
        },
        message: {
          $set: [],
        },
      })
    case RESET_MESSAGE:
      return update(state, {
        message: {
          $set: [],
        },
      })
    case SET_SEARCHED_PATTERNS:
      return update(state, {
        searchedPatterns: {
          $set: action.payload.patterns,
        },
      })
    case ADD_MESSAGE: {
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
