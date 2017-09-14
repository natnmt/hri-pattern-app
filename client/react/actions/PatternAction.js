export const setPattern = (id) => (dispatch, getState) => {
  const { pattern: { searchedPatterns } } = getState();
  dispatch(setPatternObject(searchedPatterns.find(item => item.id === id)))
}

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

export const RESET_MESSAGE = 'RESET_MESSAGE'
export const resetMessage = (message) => ({
  type: RESET_MESSAGE,
})

export const addProperty = (properties) => (dispatch) => {
  properties.forEach(item => {
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
  })
}
