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
    id: 'parent_pattern',
    key: 'parent_pattern',
    label: 'Parent Pattern',
    type: 'string',
    placeholder: 'Insert a valid ID of the parent pattern',
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
    id: 'end_state',
    key: 'end_state',
    label: 'End State',
    required: true,
    children: [
      {
        id: 'end_state.description',
        key: 'description',
        label: 'Description',
        type: 'string',
        placeholder: 'Insert the end state description',
        validation: isNotEmpty,
        required: true,
      },
      {
        id: 'end_state.parameters',
        key: 'parameters',
        label: 'Parameters',
        type: 'json',
        placeholder: 'Insert the end state parameters in a valid JSON format',
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
        id: 'solution_layer.type',
        key: 'type',
        label: 'Type',
        type: 'string',
        options: ['persona', 'pseudo-persona'],
        validation: isNotEmpty,
        required: true,
      },
      {
        id: 'solution_layer.parameters',
        key: 'parameters',
        label: 'Parameters',
        type: 'json',
        placeholder: 'Insert the persona/pseudo-persona parameters in a valid JSON format',
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
        label: 'Confidence',
        type: 'number',
        validation: isNumberZeroToTen,
        required: false,
      },
      {
        id: 'solution_layer.figure_path',
        key: 'figure_path',
        label: 'Figure',
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
    ],
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
    id: 'pattern_link',
    key: 'pattern_link',
    label: 'Patterns Link',
    type: 'string',
    placeholder: 'List the valid IDs of the linked patterns separated by comma',
    required: false,
    // Search Patterns
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
    id: 'example',
    key: 'example',
    label: 'Example',
    type: 'string',
    placeholder: 'Describe examples of this pattern',
    required: false,
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
    id: 'literature',
    key: 'literature',
    label: 'Literature',
    type: 'string',
    placeholder: 'List the literature involved for this pattern, like book, websites, papers',
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
    id: 'date_creation',
    key: 'date_creation',
    label: 'Date Creation',
    type: 'date',
    required: false,
  },
  {
    id: 'date_edited',
    key: 'date_edited',
    label: 'Date Edited',
    type: 'date',
    required: false,
  },
]

export const getPatternUIStructure = (pattern) => {
  const uiStructure = []
  Object.keys(pattern).forEach((key) => {
    const propKeys = key.split('.')
    const property = patternUIStructure.find(item => item.id.indexOf(propKeys[0]) >= 0)
    if (property && property.id !== key && property.hasOwnProperty('children')) {
      const nestedProp = property.children.find(item => item.id === key)
      if (nestedProp) {
        const propIdx = uiStructure.findIndex(item => item.id === propKeys[0])
        if (propIdx >= 0) {
          uiStructure[propIdx].children.push(Object.assign({}, nestedProp))
        }
        else {
          uiStructure.push(Object.assign({}, property, { children: [nestedProp] }))
        }
      }
    }
    else {
      uiStructure.push(Object.assign({}, property))
    }
  })
  return uiStructure
}

export const getPropertiesNotSelected = (pattern, key) => {
  const nonSelectedProps = []
  const index = patternUIStructure.findIndex(item => item.id === key)
  if (key && index >= 0) {
    patternUIStructure[index].children.forEach((item) => {
      if (!item.hasOwnProperty('children') && !pattern.hasOwnProperty(item.id)) {
        nonSelectedProps.push(item)
      }
    })
  }
  else {
    patternUIStructure.forEach((item) => {
      if (!item.hasOwnProperty('children') && !pattern.hasOwnProperty(item.id)) {
        nonSelectedProps.push(item)
      }
    })
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
