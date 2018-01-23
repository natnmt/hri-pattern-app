import { isValidVarName, isNotEmpty, isNumberZeroToTen, isJson } from './InputValidation'

export const patternUIStructure = [
  {
    id: 'id',
    key: 'id',
    label: 'ID',
    type: 'string',
    placeholder: 'Insert the id. The value should not contain empty spaces or special characters',
    validation: isValidVarName,
    required: true,
  },
  {
    id: 'name',
    key: 'name',
    label: 'Name',
    type: 'string',
    placeholder: 'Insert the pattern name',
    validation: isNotEmpty,
    required: true,
  },
  {
    id: 'alias',
    key: 'alias',
    label: 'Alias',
    type: 'string',
    placeholder: 'Insert the pattern alias',
    required: false,
  },
  {
    id: 'type',
    key: 'type',
    label: 'Type',
    type: 'string',
    options: ['interaction', 'interface'],
    validation: isNotEmpty,
    required: true,
  },
  {
    id: 'parent_patterns',
    key: 'parent_patterns',
    label: 'Parent Patterns',
    type: 'string',
    placeholder: 'List the valid IDs of the parent patterns separated by comma',
    required: false,
    // Search Pattern
  },
  {
    id: 'children_patterns',
    key: 'children_patterns',
    label: 'Children Pattern',
    placeholder: 'List the valid IDs of the children patterns separated by comma',
    type: 'string',
    required: false,
  },
  {
    id: 'source',
    key: 'source',
    label: 'Source',
    type: 'string',
    placeholder: 'Insert the pattern source',
    required: false,
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
        placeholder: 'Insert the context description',
        validation: isNotEmpty,
        required: true,
      },
      {
        id: 'context.parameters',
        key: 'parameters',
        label: 'Parameters',
        type: 'json',
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
    placeholder: 'Insert the pattern forces',
    validation: isNotEmpty,
    required: true,
  },
  {
    id: 'problem',
    key: 'problem',
    label: 'Problem',
    type: 'string',
    placeholder: 'Describe the pattern problem',
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
        placeholder: 'Insert the initial state description',
        validation: isNotEmpty,
        required: true,
      },
      {
        id: 'init_state.parameters',
        key: 'parameters',
        label: 'Parameters',
        type: 'json',
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
        options: ['persona', 'pseudo-persona', 'others'],
        validation: isNotEmpty,
        required: true,
      },
      {
        id: 'solution_layer.description',
        key: 'description',
        label: 'Description (persona/pseudo-persona/others)',
        type: 'string',
        placeholder: 'Describe solution layer category and its conditions',
        validation: isNotEmpty,
        required: true,
      },
      {
        id: 'solution_layer.parameters',
        key: 'parameters',
        label: 'Parameters (persona/pseudo-persona/others)',
        type: 'json',
        placeholder: 'Insert solution layer category parameters in a valid JSON format',
        validation: isJson,
        required: false,
      },
      {
        id: 'solution_layer.solution',
        key: 'solution',
        label: 'Solution',
        type: 'string',
        placeholder: 'Describe the pattern solution',
        validation: isNotEmpty,
        required: true,
      },
      {
        id: 'solution_layer.confidence',
        key: 'confidence',
        label: 'Level of Confidence',
        type: 'number',
        validation: isNumberZeroToTen,
        required: false,
      },
      {
        id: 'solution_layer.human_factors',
        key: 'human_factors',
        label: 'Emotions / Human Factors',
        placeholder: 'Describe emotions or any human factors criteria to have differente outputs in the interaction',
        type: 'string',
        required: false,
      },
      {
        id: 'solution_layer.illustration',
        key: 'illustration',
        label: 'Illustration',
        type: 'string',
        required: false,
        // Upload
      },
      {
        id: 'solution_layer.communication',
        key: 'communication',
        label: 'Communication',
        placeholder: 'Describe the communication (interaction) involved for this pattern',
        type: 'string',
        required: false,
      },
      {
        id: 'solution_layer.adapting_vars',
        key: 'adapting_vars',
        label: 'Adapting Vars',
        type: 'json',
        placeholder: 'Insert the adapting variables in a valid JSON format',
        validation: isJson,
        required: false,
      },
      {
        id: 'solution_layer.end_state',
        key: 'end_state',
        label: 'End State',
        required: true,
        children: [
          {
            id: 'solution_layer.end_state.description',
            key: 'description',
            label: 'Description',
            type: 'string',
            placeholder: 'Insert the end state description',
            validation: isNotEmpty,
            required: true,
          },
          {
            id: 'solution_layer.end_state.parameters',
            key: 'parameters',
            label: 'Parameters',
            type: 'json',
            placeholder: 'Insert the end state parameters in a valid JSON format',
            validation: isJson,
            required: false,
          },
        ],
      },
    ],
  },
  {
    id: 'synopsis',
    key: 'synopsis',
    label: 'Synopsis',
    type: 'string',
    placeholder: 'Insert the pattern synopsis',
    required: false,
  },
  {
    id: 'diagram_path',
    key: 'diagram_path',
    label: 'Diagram',
    type: 'string',
    required: false,
    // Upload
  },
  {
    id: 'rationale',
    key: 'rationale',
    label: 'Rationale',
    type: 'string',
    placeholder: 'Provide discussion information used to apply the pattern',
    required: false,
  },
  {
    id: 'example',
    key: 'example',
    label: 'Example',
    type: 'string',
    placeholder: 'Describe examples of this pattern',
    required: false,
  },
  {
    id: 'reliability',
    key: 'reliability',
    label: 'Reliability',
    type: 'number',
    validation: isNumberZeroToTen,
    required: false,
  },
  {
    id: 'literature',
    key: 'literature',
    label: 'Literature',
    type: 'string',
    placeholder: 'List the literature involved for this pattern, like book, websites, papers',
    required: false,
  },
  {
    id: 'implementation',
    key: 'implementation',
    label: 'Implementation',
    type: 'string',
    placeholder: 'Provide technical information for implementation',
    required: false,
    // Upload
  },
  {
    id: 'resulting_context',
    key: 'resulting_context',
    label: 'Resulting Context',
    type: 'string',
    placeholder: 'Describe the resulting context after the pattern was applied',
    required: false,
  },
  {
    id: 'related_patterns',
    key: 'related_patterns',
    label: 'Related Patterns',
    placeholder: 'List the valid IDs of the related patterns separated by comma',
    type: 'string',
    required: false,
    // Search Patterns
  },
  {
    id: 'acknowledgments',
    key: 'acknowledgments',
    label: 'Acknowledgments',
    type: 'string',
    placeholder: 'Provide acknowledgments for the pattern creation',
    required: false,
  },
  {
    id: 'organization',
    key: 'organization',
    label: 'Organization',
    type: 'string',
    placeholder: 'Provide organization information, like attrubutes of the colletion, classification and pattern category',
    required: false,
  },
  {
    id: 'management',
    key: 'management',
    label: 'Management',
    type: 'string',
    placeholder: 'Provide management information, like authors, versions, license',
    required: false,
  },
]

export const getPatternUIStructure = (pattern) => {
  let uiStructure = []
  Object.keys(pattern).forEach((key) => {
    uiStructure.push(getObjectById(patternUIStructure, key))
  })
  uiStructure = unflattenUIPatternStructure(uiStructure)
  return uiStructure
}

export const unflattenUIPatternStructure = (pattern) => {
  const result = pattern.filter(item => item.id.indexOf('.') < 0)
  const nestedProp = pattern.filter(item => item.id.indexOf('.') >= 0)
  nestedProp.forEach(item =>{
    let itemId = item.id
    const ids = []
    while(itemId.indexOf('.') >= 0) {
      const index = itemId.indexOf('.')
      ids.push(itemId.slice(0, index))
      itemId = itemId.slice(index + 1)
    }
    addEnclosingProperty(result, ids[0])
    updatePropById(result, ids, item)
  })
  return result
}

function updatePropById(data, ids, newProperty) {
  let property = data.find(item => item.id === ids[0])
  for (let i = 1; i < ids.length; i++) {
    const newId = ids.slice(0, i+1).join(".")
    const tempProp = property.children.find(item => item.id === newId)
    property = tempProp || property
    if (!tempProp) {
      if (!property.hasOwnProperty('children')) {
        property.children = []
      }
      addEnclosingProperty(property.children, newId)
      property = property.children.find(item => item.id === newId)
    }
  }
  if (property.hasOwnProperty('children')) {
    property.children.push(newProperty)
  }
  else {
    property.children = [newProperty]
  }
}

function addEnclosingProperty(data, id) {
  if (!data.find(item => item.id === id)) {
    const newProp = Object.assign({}, getObjectById(patternUIStructure, id))
    delete newProp['children'];
    data.push(newProp)
  }
}

function getObjectById(theObject, key) {
  var result = null;
  if(theObject instanceof Array) {
    for(var i = 0; i < theObject.length; i++) {
      result = getObjectById(theObject[i], key);
      if (result) {
        break;
      }
    }
  }
  else {
    for(var prop in theObject) {
      if(prop == 'id') {
        if(theObject[prop] == key) {
          return theObject;
        }
      }
      if(theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
        result = getObjectById(theObject[prop], key);
        if (result) {
          break;
        }
      }
    }
  }
  return result;
}

export const getPropertiesNotSelected = (pattern, key) => {
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
        if (!item.hasOwnProperty('children') && !pattern.hasOwnProperty(item.id)) {
          nonSelectedProps.push(item)
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
