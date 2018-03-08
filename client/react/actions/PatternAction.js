const solutionId = 'solution_layer.solutions'
const hfId = 'solution_layer.solutions.human_factors'

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

export const UPDATE_SOLUTION_PATTERN_PROPERTY = 'UPDATE_SOLUTION_PATTERN_PROPERTY'
export const updateSolutionPatternProperty = (key, value, index) => ({
  type: UPDATE_SOLUTION_PATTERN_PROPERTY,
  payload: {
    key,
    value,
    index,
  },
})

export const UPDATE_HF_SOLUTION_PATTERN_PROPERTY = 'UPDATE_HF_SOLUTION_PATTERN_PROPERTY'
export const updateHFSolutionPatternProperty = (key, value, index, hfIndex) => ({
  type: UPDATE_HF_SOLUTION_PATTERN_PROPERTY,
  payload: {
    key,
    value,
    index,
    hfIndex,
  },
})

export const ADD_PATTERN_SOLUTION = 'ADD_PATTERN_SOLUTION'
export const addPatternSolution = () => ({
  type: ADD_PATTERN_SOLUTION,
})

export const ADD_PATTERN_HF_SOLUTION = 'ADD_PATTERN_HF_SOLUTION'
export const addPatternHFSolution = (index) => ({
  type: ADD_PATTERN_HF_SOLUTION,
  payload: {
    index,
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

export const ADD_SOLUTION_PATTERN_PROPERTY = 'ADD_SOLUTION_PATTERN_PROPERTY'
export const addSolutionPatternProperty = (key, value, index) => ({
  type: ADD_SOLUTION_PATTERN_PROPERTY,
  payload: {
    key,
    value,
    index,
  },
})

export const ADD_HF_SOLUTION_PATTERN_PROPERTY = 'ADD_HF_SOLUTION_PATTERN_PROPERTY'
export const addHFSolutionPatternProperty = (key, value, index, hfIndex) => ({
  type: ADD_HF_SOLUTION_PATTERN_PROPERTY,
  payload: {
    key,
    value,
    index,
    hfIndex,
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

export const RESET_SEARCHED_PATTERNS = 'RESET_SEARCHED_PATTERNS'
export const resetSearchedPattern = () => ({
  type: RESET_SEARCHED_PATTERNS,
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
export const resetMessage = () => ({
  type: RESET_MESSAGE,
})

export const CONVERT_HF_SOLUTION_PATTERN_PROPERTY = 'CONVERT_HF_SOLUTION_PATTERN_PROPERTY'
export const convertHFSolutionPatternProperty = (key, value, index) => ({
  type: CONVERT_HF_SOLUTION_PATTERN_PROPERTY,
  payload: {
    key,
    value,
    index,
  },
})

export const DELETE_PATTERN_PROPERTY = 'DELETE_PATTERN_PROPERTY'
export const deletePatternProperty = (key) => ({
  type: DELETE_PATTERN_PROPERTY,
  payload: {
    key,
  },
})

export const DELETE_SOLUTION_PATTERN_PROPERTY = 'DELETE_SOLUTION_PATTERN_PROPERTY'
export const deleteSolutionPatternProperty = (key, index) => ({
  type: DELETE_SOLUTION_PATTERN_PROPERTY,
  payload: {
    key,
    index,
  },
})

export const DELETE_HF_SOLUTION_PATTERN_PROPERTY = 'DELETE_HF_SOLUTION_PATTERN_PROPERTY'
export const deleteHFSolutionPatternProperty = (key, index, hfIndex) => ({
  type: DELETE_HF_SOLUTION_PATTERN_PROPERTY,
  payload: {
    key,
    index,
    hfIndex,
  },
})

export const DELETE_PATTERN_SOLUTION = 'DELETE_PATTERN_SOLUTION'
export const deletePatternSolution = (index) => ({
  type: DELETE_PATTERN_SOLUTION,
  payload: {
    index,
  },
})

export const DELETE_HF_PATTERN_SOLUTION = 'DELETE_HF_PATTERN_SOLUTION'
export const deleteHFPatternSolution = (index, hfIndex) => ({
  type: DELETE_HF_PATTERN_SOLUTION,
  payload: {
    index,
    hfIndex,
  },
})

export const RESET_PATTERN_SOLUTION = 'RESET_PATTERN_SOLUTION'
export const resetPatternSolution = () => ({
  type: RESET_PATTERN_SOLUTION,
})

export const RESET_HF_PATTERN_SOLUTION = 'RESET_HF_PATTERN_SOLUTION'
export const resetHFPatternSolution = (index) => ({
  type: RESET_HF_PATTERN_SOLUTION,
  payload: {
    index,
  },
})


export const deleteOnePatternProperty = (key, index, hfIndex) => (dispatch) => {
  if (!Number.isInteger(index)) {
    dispatch(deletePatternProperty(key, index))
  }
  else {
    if (!Number.isInteger(hfIndex)) {
      dispatch(deleteSolutionPatternProperty(key, index))
    }
    else {
      dispatch(deleteHFSolutionPatternProperty(key, index, hfIndex))
    }
  }
}

export const deleteOneSolutionsLayer = (index, hfIndex) => (dispatch, getState) => {
  const { pattern: { patternToBeSaved } } = getState()
  if (!Number.isInteger(hfIndex)) {
    if (patternToBeSaved[solutionId].length > 1) {
      dispatch(deletePatternSolution(index))
    }
    else {
      dispatch(resetPatternSolution())
    }
  }
  else {
    if (patternToBeSaved[solutionId][index][hfId].length > 1) {
      dispatch(deleteHFPatternSolution(index, hfIndex))
    }
    else {
      dispatch(resetHFPatternSolution(index))
    }
  }
}

export const addSolution = (index) => (dispatch) => {
  if (!Number.isInteger(index)) {
    dispatch(addPatternSolution())
  }
  else {
    dispatch(addPatternHFSolution(index))
  }
}

export const addPatternPropertyValue = (properties, index, hfIndex) => (dispatch) => {
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
    if (item.id !== 'solution_layer.solutions.human_factors_option') {
      if (!Number.isInteger(index)) {
        dispatch(addPatternProperty(item.id, value))
      }
      else {
        if (!Number.isInteger(hfIndex)) {
          dispatch(addSolutionPatternProperty(item.id, value, index))
        }
        else {
          dispatch(addHFSolutionPatternProperty(item.id, value, index, hfIndex))
        }
      }
    }
    else {
      dispatch(convertHFSolutionPatternProperty(item.id, value, index))
    }
  })
}

export const setPattern = (id) => (dispatch, getState) => {
  const { pattern: { searchedPatterns } } = getState()
  dispatch(setPatternObject(searchedPatterns.find(item => item.id === id)))
}

export const updatePatternPropertyValue = (key, value, index, hfIndex) => (dispatch) => {
  if (!Number.isInteger(index)) {
    dispatch(updatePatternProperty(key, value))
  }
  else {
    if (!Number.isInteger(hfIndex)) {
      dispatch(updateSolutionPatternProperty(key, value, index))
    }
    else {
      dispatch(updateHFSolutionPatternProperty(key, value, index, hfIndex))
    }
  }
}

export const unflattenArray = (data, key, id) => {
  const openBracketIndex = key.indexOf('[')
  if (openBracketIndex > -1) {
    const arrIndex = Number(key.substr(openBracketIndex + 1, 1))
    const realKey = key.replace(`[${arrIndex}]`, '')
    const object = { [realKey]: data[key] }
    if (object && arrIndex > -1) {
      if (arrIndex < data[id].length) {
        data[id][arrIndex][realKey] = data[key]
      }
      else {
        data[id].push({ [realKey]: data[key] })
      }
      delete data[key]
    }
  }
}

export const setUnflattenSearchedPatterns = (patterns) => (dispatch) => {
  const newPatternsObj = patterns.map(pattern => {
    const data = Object.assign({}, pattern)
    data[solutionId] = []
    Object.keys(data).forEach(key => {
      if (key.indexOf(solutionId) > -1) {
        unflattenArray(data, key, solutionId)
      }
    })
    return data
  })
  newPatternsObj.forEach(data => {
    data[solutionId].forEach((item, index) => {
      data[solutionId][index][hfId] = []
      Object.keys(item).forEach(key => {
        if (key.indexOf(hfId) > -1) {
          unflattenArray(item, key, hfId)
        }
      })
    })
  })
  dispatch(setSearchedPatterns(newPatternsObj))
}
