import { isValidVarName, isNotEmpty, isNumberZeroToTen, isJson } from './InputValidation'

export const patternUIStructure = [
  {
    id: 'id',
    key: 'id',
    label: 'ID',
    type: 'string',
    inputType: 'text',
    placeholder: 'Insert the id. The value should not contain empty spaces or special characters',
    validation: isValidVarName,
    required: true,
  },
  {
    id: 'name',
    key: 'name',
    label: 'Name',
    type: 'string',
    inputType: 'text',
    placeholder: 'Insert the pattern name',
    validation: isNotEmpty,
    required: true,
  },
  {
    id: 'alias',
    key: 'alias',
    label: 'Alias',
    type: 'string',
    inputType: 'text',
    placeholder: 'Insert the pattern alias',
    required: false,
  },
  {
    id: 'type',
    key: 'type',
    label: 'Type',
    type: 'string',
    inputType: 'select',
    options: ['interaction', 'interface'],
    validation: isNotEmpty,
    required: true,
  },
  {
    id: 'problem',
    key: 'problem',
    label: 'Problem',
    type: 'string',
    inputType: 'textarea',
    placeholder: 'Describe the pattern problem',
    validation: isNotEmpty,
    required: true,
  },
  {
    id: 'context',
    key: 'context',
    label: 'Context',
    required: true,
    children: [
      {
        id: 'context.description',
        key: 'description',
        label: 'Description',
        type: 'string',
        inputType: 'textarea',
        placeholder: 'Insert the context description',
        validation: isNotEmpty,
        required: true,
      },
      {
        id: 'context.parameters',
        key: 'parameters',
        label: 'Parameters',
        type: 'json',
        inputType: 'textarea',
        placeholder: 'Insert the context parameters in a valid JSON format',
        validation: isJson,
        required: false,
      },
    ],
  },
  {
    id: 'forces',
    key: 'forces',
    label: 'Forces',
    type: 'string',
    inputType: 'textarea',
    placeholder: 'Insert the pattern forces',
    validation: isNotEmpty,
    required: true,
  },
  {
    id: 'init_state',
    key: 'init_state',
    label: 'Init State',
    required: true,
    children: [
      {
        id: 'init_state.description',
        key: 'description',
        label: 'Description',
        type: 'string',
        inputType: 'textarea',
        placeholder: 'Insert the initial state description',
        validation: isNotEmpty,
        required: true,
      },
      {
        id: 'init_state.parameters',
        key: 'parameters',
        label: 'Parameters',
        type: 'json',
        inputType: 'textarea',
        placeholder: 'Insert the initial state parameters in a valid JSON format',
        validation: isJson,
        required: false,
      },
    ],
  },
  {
    id: 'solution_layer',
    key: 'solution_layer',
    label: 'Solution Layer',
    required: true,
    children: [
      {
        id: 'solution_layer.category',
        key: 'category',
        label: 'Category',
        type: 'string',
        inputType: 'select',
        options: ['persona', 'pseudo-persona', 'others'],
        validation: isNotEmpty,
        required: true,
      },
      {
        id: 'solution_layer.solutions',
        key: 'solutions',
        required: true,
        children: [
          {
            id: 'solution_layer.solutions.description',
            key: 'description',
            label: 'Description (persona/pseudo-persona/others)',
            type: 'string',
            inputType: 'textarea',
            placeholder: 'Describe solution layer category and its conditions',
            validation: isNotEmpty,
            required: true,
          },
          {
            id: 'solution_layer.solutions.parameters',
            key: 'parameters',
            label: 'Parameters (persona/pseudo-persona/others)',
            type: 'json',
            inputType: 'textarea',
            placeholder: 'Insert solution layer category parameters in a valid JSON format',
            validation: isJson,
            required: false,
          },
          {
            id: 'solution_layer.solutions.solution',
            key: 'solution',
            label: 'Solution',
            type: 'string',
            inputType: 'textarea',
            placeholder: 'Describe the pattern solution',
            validation: isNotEmpty,
            required: true,
          },
          {
            id: 'solution_layer.solutions.confidence',
            key: 'confidence',
            label: 'Level of Confidence',
            type: 'number',
            inputType: 'text',
            validation: isNumberZeroToTen,
            required: false,
          },
          {
            id: 'solution_layer.solutions.illustration',
            key: 'illustration',
            label: 'Illustration',
            type: 'string',
            inputType: 'text',
            required: false,
            // Upload
          },
          {
            id: 'solution_layer.solutions.communication',
            key: 'communication',
            label: 'Communication',
            placeholder: 'Describe the communication (interaction) involved for this pattern',
            type: 'string',
            inputType: 'textarea',
            required: false,
          },
          {
            id: 'solution_layer.solutions.adapting_vars',
            key: 'adapting_vars',
            label: 'Adapting Vars',
            type: 'json',
            inputType: 'textarea',
            placeholder: 'Insert the adapting variables in a valid JSON format',
            validation: isJson,
            required: false,
          },
          {
            id: 'solution_layer.solutions.end_state',
            key: 'end_state',
            label: 'End State',
            required: true,
            children: [
              {
                id: 'solution_layer.solutions.end_state.description',
                key: 'description',
                label: 'Description',
                type: 'string',
                inputType: 'textarea',
                placeholder: 'Insert the end state description',
                validation: isNotEmpty,
                required: true,
              },
              {
                id: 'solution_layer.solutions.end_state.parameters',
                key: 'parameters',
                label: 'Parameters',
                type: 'json',
                inputType: 'textarea',
                placeholder: 'Insert the end state parameters in a valid JSON format',
                validation: isJson,
                required: false,
              },
            ],
          },
          {
            id: 'solution_layer.solutions.human_factors_option',
            key: 'human_factors',
            type: 'string',
            label: 'Emotions / Human Factors',
            required: false,
          },
          {
            id: 'solution_layer.solutions.human_factors',
            key: 'human_factors',
            required: false,
            children: [
              {
                id: 'solution_layer.solutions.human_factors.description',
                key: 'human_factors',
                label: 'Emotions / Human Factors',
                placeholder: 'Describe emotions or any human factors criteria to have differente outputs in the interaction',
                type: 'string',
                inputType: 'textarea',
                required: true,
              },
              {
                id: 'solution_layer.solutions.human_factors.illustration',
                key: 'illustration',
                label: 'Illustration',
                type: 'string',
                inputType: 'text',
                required: false,
                // Upload
              },
              {
                id: 'solution_layer.solutions.human_factors.communication',
                key: 'communication',
                label: 'Communication',
                placeholder: 'Describe the communication (interaction) involved for this pattern',
                type: 'string',
                inputType: 'textarea',
                required: false,
              },
              {
                id: 'solution_layer.solutions.human_factors.adapting_vars',
                key: 'adapting_vars',
                label: 'Adapting Vars',
                type: 'json',
                inputType: 'textarea',
                placeholder: 'Insert the adapting variables in a valid JSON format',
                validation: isJson,
                required: false,
              },
              {
                id: 'solution_layer.solutions.human_factors.end_state',
                key: 'end_state',
                label: 'End State',
                required: true,
                children: [
                  {
                    id: 'solution_layer.solutions.human_factors.end_state.description',
                    key: 'description',
                    label: 'Description',
                    type: 'string',
                    inputType: 'textarea',
                    placeholder: 'Insert the end state description',
                    validation: isNotEmpty,
                    required: true,
                  },
                  {
                    id: 'solution_layer.solutions.human_factors.end_state.parameters',
                    key: 'parameters',
                    label: 'Parameters',
                    type: 'json',
                    inputType: 'textarea',
                    placeholder: 'Insert the end state parameters in a valid JSON format',
                    validation: isJson,
                    required: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'confidence',
    key: 'confidence',
    label: 'Confidence',
    type: 'number',
    inputType: 'text',
    validation: isNumberZeroToTen,
    required: false,
  },
  {
    id: 'synopsis',
    key: 'synopsis',
    label: 'Synopsis',
    type: 'string',
    inputType: 'textarea',
    placeholder: 'Insert the pattern synopsis',
    required: false,
  },
  {
    id: 'diagram_path',
    key: 'diagram_path',
    label: 'Diagram',
    type: 'string',
    inputType: 'text',
    required: false,
    // Upload
  },
  {
    id: 'rationale',
    key: 'rationale',
    label: 'Rationale',
    type: 'string',
    inputType: 'textarea',
    placeholder: 'Provide discussion information used to apply the pattern',
    required: false,
  },
  {
    id: 'example',
    key: 'example',
    label: 'Example',
    type: 'string',
    inputType: 'textarea',
    placeholder: 'Describe examples of this pattern',
    required: false,
  },
  {
    id: 'reliability',
    key: 'reliability',
    label: 'Reliability',
    type: 'number',
    inputType: 'textarea',
    validation: isNumberZeroToTen,
    required: false,
  },
  {
    id: 'literature',
    key: 'literature',
    label: 'Literature',
    type: 'string',
    inputType: 'textarea',
    placeholder: 'List the literature involved for this pattern, like book, websites, papers',
    required: false,
  },
  {
    id: 'implementation',
    key: 'implementation',
    label: 'Implementation',
    type: 'string',
    inputType: 'textarea',
    placeholder: 'Provide technical information for implementation',
    required: false,
    // Upload
  },
  {
    id: 'resulting_context',
    key: 'resulting_context',
    label: 'Resulting Context',
    type: 'string',
    inputType: 'textarea',
    placeholder: 'Describe the resulting context after the pattern was applied',
    required: false,
  },
  {
    id: 'related_patterns',
    key: 'related_patterns',
    label: 'Related Patterns',
    placeholder: 'List the related patterns and its description.',
    type: 'string',
    inputType: 'textarea',
    required: false,
    // Search Patterns
  },
  {
    id: 'pattern_link',
    key: 'pattern_link',
    label: 'Pattern Link',
    placeholder: 'Insert all pattern links in a valid JSON format',
    type: 'json',
    inputType: 'textarea',
    validation: isJson,
    required: false,
    // Search Patterns
  },
  {
    id: 'acknowledgments',
    key: 'acknowledgments',
    label: 'Acknowledgments',
    type: 'string',
    inputType: 'textarea',
    placeholder: 'Provide acknowledgments for the pattern creation',
    required: false,
  },
  {
    id: 'organization',
    key: 'organization',
    label: 'Organization',
    type: 'string',
    inputType: 'textarea',
    placeholder: 'Provide organization information, like attrubutes of the colletion, classification and pattern category',
    required: false,
  },
  {
    id: 'management',
    key: 'management',
    label: 'Management',
    type: 'string',
    inputType: 'textarea',
    placeholder: 'Provide management information, like authors, versions, license',
    required: false,
  },
]

function getObjectById(theObject, key) {
  let result = null
  if (theObject instanceof Array) {
    for (let i = 0; i < theObject.length; i++) {
      result = getObjectById(theObject[i], key)
      if (result) {
        break
      }
    }
  }
  else {
    for (const prop in theObject) {
      if (prop === 'id') {
        if (theObject[prop] === key) {
          return theObject
        }
      }
      if (theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
        result = getObjectById(theObject[prop], key)
        if (result) {
          break
        }
      }
    }
  }
  return result
}

export const getChildrenProperties = (object, id) => {
  const ids = id.split('.')
  let result = object
  for (let i = 1; i < ids.length; i++) {
    result = result.children.find(item => item.id === ids.slice(0, i + 1).join('.'))
  }
  return result.children || result
}

function addEnclosingProperty(data, id) {
  if (!data.find(item => item.id === id)) {
    const newProp = Object.assign({}, getObjectById(patternUIStructure, id))
    delete newProp['children']
    data.push(newProp)
  }
}

function updatePropById(data, ids, newProperty) {
  let property = data.find(item => item.id === ids[0])
  for (let i = 1; i < ids.length; i++) {
    const newId = ids.slice(0, i + 1).join('.')
    const tempProp = property.hasOwnProperty('children') ?
      property.children.find(item => item.id === newId) : null
    property = tempProp || property
    if (!tempProp) {
      if (!property.hasOwnProperty('children')) {
        property.children = []
      }
      addEnclosingProperty(property.children, newId)
      property = property.children.find(item => item.id === newId)
    }
  }
  const hasChildren = property.hasOwnProperty('children')
  const newPropHasChildren = newProperty.hasOwnProperty('children')
  if (property.id === newProperty.id) {
    if (!hasChildren && newPropHasChildren) {
      property.children = newProperty.children
    }
  }
  else {
    const propertyToBeAdded = hasChildren ? property.children.find(item => item.id === newProperty.id) : null
    if (!propertyToBeAdded) {
      if (hasChildren) {
        property.children.push(newProperty)
      }
      else {
        property.children = [newProperty]
      }
    }
    else {
      if (!propertyToBeAdded.hasOwnProperty('children') && newPropHasChildren) {
        propertyToBeAdded.children = newProperty.children
      }
    }
  }
}

export const unflattenUIPatternStructure = (pattern) => {
  const result = pattern.filter(item => item.id.indexOf('.') < 0)
  const nestedProp = pattern.filter(item => item.id.indexOf('.') >= 0)
  nestedProp.forEach(item => {
    const ids = item.id.split('.')
    addEnclosingProperty(result, ids[0])
    updatePropById(result, ids, item)
  })
  return result
}

export const getPatternUIStructure = (pattern) => {
  let uiStructure = []
  Object.keys(pattern).forEach((key) => {
    if (key !== 'feedback') {
      const object = getObjectById(patternUIStructure, key)
      if (!Array.isArray(pattern[key])) {
        if (object) {
          uiStructure.push(object)
        }
      }
      else {
        const children = []
        for (let i = 0; i < pattern[key].length; i++) {
          const nestedStructure = getPatternUIStructure(pattern[key][i])
          if (nestedStructure) {
            children.push(getChildrenProperties(nestedStructure[0], object.id))
          }
        }
        uiStructure.push(Object.assign({}, object, { children }))
      }
    }
  })
  uiStructure = unflattenUIPatternStructure(uiStructure)
  return uiStructure
}

export const getPropertiesNotSelected = (pattern, key, solutionIndex, hfIndex) => {
  const nonSelectedProps = []
  if (!key) {
    patternUIStructure.forEach((item) => {
      if (!item.hasOwnProperty('children') && !pattern.hasOwnProperty(item.id)) {
        nonSelectedProps.push(item)
      }
    })
  }
  else {
    const property = getObjectById(patternUIStructure, key)
    if (property.hasOwnProperty('children')) {
      property.children.forEach((item) => {
        if (!item.hasOwnProperty('children')) {
          if (!Number.isInteger(solutionIndex)) {
            if (!pattern.hasOwnProperty(item.id)) {
              nonSelectedProps.push(item)
            }
          }
          else {
            if (!Number.isInteger(hfIndex)) {
              if (pattern['solution_layer.solutions'] && pattern['solution_layer.solutions'][solutionIndex]) {
                if (!pattern['solution_layer.solutions'][solutionIndex].hasOwnProperty(item.id)) {
                  nonSelectedProps.push(item)
                }
              }
            }
            else {
              if (
                pattern['solution_layer.solutions'] && pattern['solution_layer.solutions'][solutionIndex] &&
                pattern['solution_layer.solutions'][solutionIndex].hasOwnProperty('solution_layer.solutions.human_factors')
              ) {
                const hfProp = pattern['solution_layer.solutions'][solutionIndex]['solution_layer.solutions.human_factors'][hfIndex]
                if (!hfProp.hasOwnProperty(item.id)) {
                  nonSelectedProps.push(item)
                }
              }
            }
          }
        }
      })
    }
  }
  return nonSelectedProps
}

export const validatePattern = (pattern, patternStructure) => {
  const message = []
  Object.keys(pattern).forEach((key) => {
    const index = patternStructure.findIndex(item => item.id === key)
    let property
    if (index < 0) {
      const arrKeys = key.split('.')
      const currentPattern = patternStructure.find(item => item.id === arrKeys[0])
      if (currentPattern && currentPattern.hasOwnProperty('children')) {
        property = patternStructure.find(item => item.id === arrKeys[0]).children.find(item => item.id === key)
      }
    }
    else {
      property = patternStructure[index]
    }
    if (property && property.hasOwnProperty('validation')) {
      const isValid = property.required || (!property.required && pattern[key].length > 0) ? property.validation(pattern[key]) : true
      if (!isValid) {
        if (property.type === 'number') {
          message.push(`${property.label} is invalid. The number should be between 0 to 10`)
        }
        if (property.type === 'string') {
          if (property.type === 'string' && property.id === 'id') {
            message.push(`${property.label} is invalid. The value should not be empty, contain specialCharacters or empty space`)
          }
          else {
            message.push(`${property.label} is invalid. The value should not be empty`)
          }
        }
        if (property.type === 'json') {
          message.push(`${property.label} is not in a valid JSON object format`)
        }
      }
    }
  })
  return message
}
