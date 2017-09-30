export const SET_PATTERN_OBJECT = 'SET_PATTERN_OBJECT'
export const setPatternObject = (pattern) => ({
  type: SET_PATTERN_OBJECT,
  payload: {
    pattern,
  },
})

export const UPDATE_PATTERN_PROPERTY = 'UPDATE_PATTERN_PROPERTY'
export const updatePatternProperty = (key, value) => ({
  type: UPDATE_PATTERN_PROPERTY,
  payload: {
    key,
    value,
  },
})


export const ADD_PATTERN_PROPERTY = 'ADD_PATTERN_PROPERTY'
export const addPatternProperty = (key, value) => ({
  type: ADD_PATTERN_PROPERTY,
  payload: {
    key,
    value,
  },
})

export const REMOVE_PATTERN_PROPERTY = 'REMOVE_PATTERN_PROPERTY'
export const removePatternProperty = (key) => ({
  type: REMOVE_PATTERN_PROPERTY,
  payload: {
    key,
  },
})

export const SET_TEXT_SEARCH_PATTERN = 'SET_TEXT_SEARCH_PATTERN'
export const setTextSearchPattern = (id) => ({
  type: SET_TEXT_SEARCH_PATTERN,
  payload: {
    id,
  },
})

export const SET_SEARCHED_PATTERNS = 'SET_SEARCHED_PATTERNS'
export const setSearchedPatterns = (patterns) => ({
  type: SET_SEARCHED_PATTERNS,
  payload: {
    patterns,
  },
})

export const RESET_PATTERN = 'RESET_PATTERN'
export const resetPattern = () => ({
  type: RESET_PATTERN,
})

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: {
    message,
  },
})

export const RESET_SEARCHED_PATTERNS = 'RESET_SEARCHED_PATTERNS'
export const resetSearchedPatterns = (message) => ({
  type: RESET_SEARCHED_PATTERNS,
})

export const RESET_MESSAGE = 'RESET_MESSAGE'
export const resetMessage = (message) => ({
  type: RESET_MESSAGE,
})

export const addProperty = (properties) => (dispatch, getState) => {
  const { pattern: { patternToBeSaved } } = getState();

  properties.forEach(item => {
    if (!patternToBeSaved.hasOwnProperty(item.id)) {
      let value
      switch (item.type) {
        case 'array':
          value = []
          break
        case 'object':
          value = {}
          break
        case 'number':
          value = 0
          break
        default:
          value = ''
      }
      dispatch(addPatternProperty(item.id, value))
    }
  })
}
