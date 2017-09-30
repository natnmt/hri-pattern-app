import { isNotEmpty, isValidAge } from './InputValidation'

export const personaUIStructure = [
  {
    id: 'name',
    key: 'name',
    label: 'Name',
    type: 'string',
    placeholder: 'Insert the persona name',
    inputType: 'text',
    validation: isNotEmpty,
    required: true,
  },
  {
    id: 'age',
    key: 'age',
    label: 'Age',
    type: 'number',
    placeholder: 'Insert the persona age',
    inputType: 'number',
    validation: isValidAge,
    required: true,
  },
  {
    id: 'biography',
    key: 'biography',
    label: 'Biography',
    type: 'string',
    placeholder: 'Insert the persona biography',
    inputType: 'textarea',
    validation: isNotEmpty,
    required: true,
  },
  {
    id: 'information',
    key: 'information',
    label: 'Other Information',
    type: 'string',
    inputType: 'text',
    placeholder: 'Insert more information about the persona, like the goals, problemas, experience, etc.',
    inputType: 'textarea',
    required: false,
  },
]


export const validatePersona = (persona) => {
  const message = []
  Object.keys(persona).forEach((key) => {
    const index = personaUIStructure.findIndex(item => item.id === key)
    let property
    if (index >= 0) {
      property = personaUIStructure[index]
    }
    if (property && property.hasOwnProperty('validation')) {
      const isValid = property.required || (!property.required && persona[key].length > 0) ? property.validation(persona[key]) : true
      if (!isValid) {
        if (property.type === 'number') {
          message.push(`${property.label} is invalid. The value should not be empty and the number should be between 0 to 100`)
        }
        if (property.type === 'string') {
          message.push(`${property.label} is invalid. The value should not be empty`)
        }
      }
    }
  })
  return message
}
