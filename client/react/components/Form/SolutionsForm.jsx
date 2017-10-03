import React, { PropTypes } from 'react'
import { getInput } from '../../utils/InputValidation'
import { solutionUIStructure } from '../../utils/PatternUIStructure'
import FieldContainer from './FieldContainer'
import Label from './Label'
import Button from '../Button/Button'
import './Form.css'
import './Footer.css'

const SolutionsForm = ({ pattern, onChangeInput, readOnly, onAddPatternSolution, onAddSolutionProperty }) => {
  const solutions = pattern['solution_layer.solutions'].map((solution, index) => {
    const fields = Object.keys(solution).map((key) => {
      const currentProp = solutionUIStructure.find(item => item.id === key)
      const value = solution[key]
      const placeholder = currentProp.hasOwnProperty('placeholder') ? currentProp.placeholder : ''
      const content = getInput(
        currentProp.id, currentProp.type, currentProp.inputType, value,
        (k, val) => onChangeInput(k, index, val), currentProp.options, readOnly, placeholder,
      )
      return (
        <FieldContainer key={currentProp.id}>
          <Label>{currentProp.label}</Label>
          {content}
        </FieldContainer>
      )
    })
    return (
      <div className="solution" key={index}>
        {fields}
        {readOnly ? null : (
          <Button
            onClick={() => onAddSolutionProperty(index)}
            icon="add"
            iconPosition="left"
          >
            Add a New Property
          </Button>
        )}
      </div>
    )
  })
  return (
    <div className="SolutionsForm">
      {solutions}
      <div className="Footer">
        {readOnly ? null : (
          <Button
            onClick={onAddPatternSolution}
            icon="add"
            iconPosition="left"
          >
            Add a New Solution
          </Button>
        )}
      </div>
    </div>
  )
}

SolutionsForm.propTypes = {
  items: PropTypes.array,
  readOnly: PropTypes.bool,
}

SolutionsForm.defaultProps = {
  items: [],
  readOnly: false,
}

SolutionsForm.displayName = 'SolutionsForm'

export default SolutionsForm
