import update from 'react-addons-update'
import {
  SET_PATTERN_OBJECT, UPDATE_PATTERN_PROPERTY, RESET_PATTERN, ADD_PATTERN_PROPERTY,
  REMOVE_PATTERN_PROPERTY, SET_SEARCHED_PATTERNS, ADD_MESSAGE, RESET_MESSAGE,
  UPDATE_SOLUTION_PATTERN_PROPERTY, ADD_SOLUTION_PATTERN_PROPERTY, ADD_PATTERN_SOLUTION,
  UPDATE_HF_SOLUTION_PATTERN_PROPERTY, ADD_HF_SOLUTION_PATTERN_PROPERTY, ADD_PATTERN_HF_SOLUTION,
  CONVERT_HF_SOLUTION_PATTERN_PROPERTY, RESET_SEARCHED_PATTERNS, DELETE_HF_PATTERN_SOLUTION,
  DELETE_PATTERN_SOLUTION, DELETE_HF_SOLUTION_PATTERN_PROPERTY, DELETE_SOLUTION_PATTERN_PROPERTY,
  DELETE_PATTERN_PROPERTY, RESET_HF_PATTERN_SOLUTION, RESET_PATTERN_SOLUTION,
} from '../actions/PatternAction'
import { patternReducerStructure, patternSolutionReducerStructure, patternHFReducerStructure } from '../utils/PatternStructure'

const initialState = {
  patternToBeSaved: patternReducerStructure,
  searchedPatterns: [],
  searchedText: '',
  message: [],
}

const solutionsId = 'solution_layer.solutions'
const hfId = 'solution_layer.solutions.human_factors'

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
    case UPDATE_SOLUTION_PATTERN_PROPERTY: {
      return update(state, {
        patternToBeSaved: {
          [solutionsId]: {
            [action.payload.index]: {
              [action.payload.key]: {
                $set: action.payload.value,
              },
            },
          },
        },
      })
    }
    case UPDATE_HF_SOLUTION_PATTERN_PROPERTY: {
      return update(state, {
        patternToBeSaved: {
          [solutionsId]: {
            [action.payload.index]: {
              [hfId]: {
                [action.payload.hfIndex]: {
                  [action.payload.key]: {
                    $set: action.payload.value,
                  },
                },
              },
            },
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
    case ADD_SOLUTION_PATTERN_PROPERTY: {
      return update(state, {
        patternToBeSaved: {
          [solutionsId]: {
            [action.payload.index]: {
              $set: Object.assign(
                {},
                state.patternToBeSaved[solutionsId][action.payload.index],
                { [action.payload.key]: action.payload.value }
              ),
            },
          },
        },
      })
    }
    case ADD_HF_SOLUTION_PATTERN_PROPERTY: {
      return update(state, {
        patternToBeSaved: {
          [solutionsId]: {
            [action.payload.index]: {
              [hfId]: {
                [action.payload.hfIndex]: {
                  $set: Object.assign(
                    {},
                    state.patternToBeSaved[solutionsId][action.payload.index][hfId][action.payload.hfIndex],
                    { [action.payload.key]: action.payload.value }
                  ),
                },
              },
            },
          },
        },
      })
    }
    case ADD_PATTERN_SOLUTION: {
      return update(state, {
        patternToBeSaved: {
          [solutionsId]: {
            $set: [...state.patternToBeSaved[solutionsId], Object.assign({}, patternSolutionReducerStructure)],
          },
        },
      })
    }
    case ADD_PATTERN_HF_SOLUTION: {
      return update(state, {
        patternToBeSaved: {
          [solutionsId]: {
            [action.payload.index]: {
              [hfId]: {
                $set: [...state.patternToBeSaved[solutionsId][action.payload.index][hfId], Object.assign({}, patternHFReducerStructure)],
              },
            },
          },
        },
      })
    }
    case CONVERT_HF_SOLUTION_PATTERN_PROPERTY: {
      const newSolution = Object.assign(state.patternToBeSaved[solutionsId][action.payload.index])
      newSolution[hfId] = [Object.assign({}, patternHFReducerStructure)]
      const illustrationId = 'solution_layer.solutions.illustration'
      if (newSolution.hasOwnProperty(illustrationId)) {
        newSolution[hfId][0]['solution_layer.solutions.human_factors.illustration'] = newSolution[illustrationId]
        delete newSolution[illustrationId]
      }
      const communicationId = 'solution_layer.solutions.communication'
      if (newSolution.hasOwnProperty(communicationId)) {
        newSolution[hfId][0]['solution_layer.solutions.human_factors.communication'] = newSolution[communicationId]
        delete newSolution[communicationId]
      }
      const adaptingVarsId = 'solution_layer.solutions.communication'
      if (newSolution.hasOwnProperty(adaptingVarsId)) {
        newSolution[hfId][0]['solution_layer.solutions.human_factors.adapting_vars'] = newSolution[adaptingVarsId]
        delete newSolution[adaptingVarsId]
      }
      const endStateDescVarsId = 'solution_layer.solutions.end_state.description'
      if (newSolution.hasOwnProperty(endStateDescVarsId)) {
        newSolution[hfId][0]['solution_layer.solutions.human_factors.end_state.description'] = newSolution[endStateDescVarsId]
        delete newSolution[endStateDescVarsId]
      }
      const endStateParamsVarsId = 'solution_layer.solutions.end_state.parameters'
      if (newSolution.hasOwnProperty(endStateParamsVarsId)) {
        newSolution[hfId][0]['solution_layer.solutions.human_factors.end_state.parameters'] = newSolution[endStateParamsVarsId]
        delete newSolution[endStateParamsVarsId]
      }
      return update(state, {
        patternToBeSaved: {
          [solutionsId]: {
            [action.payload.index]: {
              $set: newSolution,
            },
          },
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

    case RESET_SEARCHED_PATTERNS:
      return update(state, {
        searchedPatterns: {
          $set: [],
        },
      })
    case ADD_MESSAGE: {
      const newMessageArr = state.message.slice(0)
      newMessageArr.push(action.payload.message)
      return update(state, {
        message: {
          $set: newMessageArr,
        },
      })
    }

    case DELETE_PATTERN_PROPERTY: {
      const patternObj = Object.assign({}, state.patternToBeSaved)
      delete patternObj[action.payload.key]
      return update(state, {
        patternToBeSaved: {
          $set: patternObj,
        },
      })
    }
    case DELETE_SOLUTION_PATTERN_PROPERTY: {
      const solution = Object.assign({}, state.patternToBeSaved[solutionsId][action.payload.index])
      delete solution[action.payload.key]
      return update(state, {
        patternToBeSaved: {
          [solutionsId]: {
            [action.payload.index]: {
              $set: solution,
            },
          },
        },
      })
    }
    case DELETE_HF_SOLUTION_PATTERN_PROPERTY: {
      const hf = Object.assign({}, state.patternToBeSaved[solutionsId][action.payload.index][hfId][action.payload.hfIndex])
      delete hf[action.payload.key]
      return update(state, {
        patternToBeSaved: {
          [solutionsId]: {
            [action.payload.index]: {
              [hfId]: {
                [action.payload.hfIndex]: {
                  $set: hf,
                },
              },
            },
          },
        },
      })
    }
    case DELETE_PATTERN_SOLUTION: {
      const solutions = state.patternToBeSaved[solutionsId].slice(0)
      solutions.splice(action.payload.index, 1)
      return update(state, {
        patternToBeSaved: {
          [solutionsId]: {
            $set: solutions,
          },
        },
      })
    }
    case DELETE_HF_PATTERN_SOLUTION: {
      const hfs = state.patternToBeSaved[solutionsId][action.payload.index][hfId].slice(0)
      hfs.splice(action.payload.hfIndex, 1)
      return update(state, {
        patternToBeSaved: {
          [solutionsId]: {
            [action.payload.index]: {
              [hfId]: {
                $set: hfs,
              },
            },
          },
        },
      })
    }
    case RESET_PATTERN_SOLUTION: {
      return update(state, {
        patternToBeSaved: {
          [solutionsId]: {
            $set: [patternSolutionReducerStructure],
          },
        },
      })
    }
    case RESET_HF_PATTERN_SOLUTION: {
      const solution = Object.assign({}, state.patternToBeSaved[solutionsId][action.payload.index])
      const hfIllustrationKey = 'solution_layer.solutions.human_factors.illustration'
      if (solution[hfId][0].hasOwnProperty(hfIllustrationKey)) {
        solution['solution_layer.solutions.illustration'] = solution[hfId][0][hfIllustrationKey]
      }
      const hfCommunicationKey = 'solution_layer.solutions.human_factors.communication'
      if (solution[hfId][0].hasOwnProperty(hfCommunicationKey)) {
        solution['solution_layer.solutions.communication'] = solution[hfId][0][hfCommunicationKey]
      }
      const hfAdaptVarKey = 'solution_layer.solutions.human_factors.adapting_vars'
      if (solution[hfId][0].hasOwnProperty(hfAdaptVarKey)) {
        solution['solution_layer.solutions.adapting_vars'] = solution[hfId][0][hfAdaptVarKey]
      }
      const hfESDescKey = 'solution_layer.solutions.human_factors.end_state.description'
      if (solution[hfId][0].hasOwnProperty(hfESDescKey)) {
        solution['solution_layer.solutions.end_state.description'] = solution[hfId][0][hfESDescKey]
      }
      const hfESParamKey = 'solution_layer.solutions.human_factors.end_state.parameters'
      if (solution[hfId][0].hasOwnProperty(hfESParamKey)) {
        solution['solution_layer.solutions.end_state.parameters'] = solution[hfId][0][hfESParamKey]
      }
      delete solution[hfId]
      return update(state, {
        patternToBeSaved: {
          [solutionsId]: {
            [action.payload.index]: {
              $set: solution,
            },
          },
        },
      })
    }
    default:
      return state
  }
}
