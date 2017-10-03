export const SET_PATTERN_OBJECT = 'SET_PATTERN_OBJECT'
export const setPatternObject = (pattern) => ({
  type: SET_PATTERN_OBJECT,
  payload: {
    pattern,
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

export const UPDATE_PATTERN_PROPERTIES = 'UPDATE_PATTERN_PROPERTIES'
export const updatePatternProperties = (key, value) => (dispatch, getState) => {
  const { pattern: { patternToBeSaved } } = getState();
  if (key === 'solution_layer.type' && value === 'pseudo-persona') {
    patternToBeSaved['solution_layer.solutions'].forEach((item, index) => {
      dispatch(removePatternSolutionProperty('persona', index))
    })
  }
  dispatch(updatePatternProperty(key, value))
}

export const UPDATE_PATTERN_PROPERTY = 'UPDATE_PATTERN_PROPERTY'
export const updatePatternProperty = (key, value) => ({
  type: UPDATE_PATTERN_PROPERTY,
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

export const ADD_PATTERN_SOLUTION = 'ADD_PATTERN_SOLUTION'
export const addPatternSolution = () => ({
  type: ADD_PATTERN_SOLUTION,
})

export const ADD_PATTERN_SOLUTION_PROPERTY = 'ADD_PATTERN_SOLUTION_PROPERTY'
export const addPatternSolutionProperty = (key, index, value) => ({
  type: ADD_PATTERN_SOLUTION_PROPERTY,
  payload: {
    key,
    index,
    value,
  },
})

export const UPDATE_PATTERN_SOLUTION_PROPERTY = 'UPDATE_PATTERN_SOLUTION_PROPERTY'
export const updatePatternSolutionProperty = (key, index, value) => ({
  type: UPDATE_PATTERN_SOLUTION_PROPERTY,
  payload: {
    key,
    index,
    value,
  },
})

export const REMOVE_PATTERN_SOLUTION_PROPERTY = 'REMOVE_PATTERN_SOLUTION_PROPERTY'
export const removePatternSolutionProperty = (key, index) => ({
  type: REMOVE_PATTERN_SOLUTION_PROPERTY,
  payload: {
    key,
    index,
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

const getValueByType = (type) => {
  let value
  switch (type) {
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
  return value
}

export const addProperty = (properties) => (dispatch, getState) => {
  const { pattern: { patternToBeSaved } } = getState();

  properties.forEach(item => {
    if (!patternToBeSaved.hasOwnProperty(item.id)) {
      const value = getValueByType(item.type)
      dispatch(addPatternProperty(item.id, value))
    }
  })
}


export const addSolutionProperty = (properties, index) => (dispatch, getState) => {
  const { pattern: { patternToBeSaved } } = getState();
  properties.forEach(item => {
    if (!patternToBeSaved['solution_layer.solutions'].hasOwnProperty(item.id)) {
      const value = getValueByType(item.type)
      dispatch(updatePatternSolutionProperty(item.id, index, value))
    }
  })
}
