import React, { PropTypes } from 'react'
import Slider from 'react-slick'
import { getInput, getInputValue } from '../../utils/InputValidation'
import Accordion from '../Accordion/Accordion'
import Button from '../Button/Button'
import FieldContainer from './FieldContainer'
import Label from './Label'
import './FormInput.css'

const hfId = 'solution_layer.solutions.human_factors'

const FormInput = ({
  fields, pattern, onChange, onAddProperty, readOnly, editMode, checkForMoreProperties, addPatternSolution,
  solutionIndex, hfIndex, deleteProperty, deleteSolution,
}) => {
  const formFields = fields.map((item, idx) => {
    let input = null
    const isNewSection = item.children && item.label
    const placeholder = item.hasOwnProperty('placeholder') ? item.placeholder : ''
    const isSolutionLayer = item.id === 'solution_layer'
    const isHF = item.id === hfId
    if (!item.children) {
      const value = getInputValue(pattern, item.id, solutionIndex, hfIndex)
      const newReadOnly = item.id === 'id' ? (readOnly || editMode) : readOnly
      input = getInput(
        item.id, item.type, item.inputType, value, item.required, onChange, deleteProperty, item.options, newReadOnly,
        placeholder, solutionIndex, hfIndex,
      )
    }
    else {
      if (!Array.isArray(item.children[0])) {
        input = (<FormInput
          fields={item.children}
          pattern={pattern}
          onChange={onChange}
          onAddProperty={onAddProperty}
          readOnly={readOnly}
          editMode={editMode}
          checkForMoreProperties={checkForMoreProperties}
          addPatternSolution={addPatternSolution}
          solutionIndex={solutionIndex}
          hfIndex={hfIndex}
          deleteProperty={deleteProperty}
          deleteSolution={deleteSolution}
        />)
      }
      else {
        input = item.children.map((child, index) => {
          const hasMoreProps = !isHF ?
            checkForMoreProperties(pattern, item.id, index).length > 0 :
            checkForMoreProperties(pattern, item.id, solutionIndex, index).length > 0
          const onClickAction = !isHF ? () => onAddProperty(item.id, index) : () => onAddProperty(item.id, solutionIndex, index)
          return (
            <div className={isHF ? 'hf' : 'solution'} key={index}>
              <FormInput
                fields={child}
                pattern={pattern}
                onChange={onChange}
                onAddProperty={onAddProperty}
                readOnly={readOnly}
                editMode={editMode}
                checkForMoreProperties={checkForMoreProperties}
                addPatternSolution={addPatternSolution}
                solutionIndex={!isHF ? index : solutionIndex}
                hfIndex={isHF ? index : null}
                deleteProperty={deleteProperty}
                deleteSolution={deleteSolution}
              />
              {
                !readOnly && hasMoreProps ? (
                  <Button
                    onClick={onClickAction}
                    icon="add"
                    iconPosition="left"
                  >
                    Add another element
                  </Button>
                ) : null
              }
              {
                !readOnly && item.children.length > 1 ?
                  <Button
                    className="solution-btn delete"
                    onClick={isHF ? () => deleteSolution(solutionIndex, index) : () => deleteSolution(index)}
                    icon="remove"
                    iconPosition="left"
                    secondaryColor
                  >
                    {`Delete ${isHF ? 'Emotion / HumanFactor' : 'Solution'}`}
                  </Button>
                  : null
                }
            </div>
          )
        })
      }
    }
    const hasMoreProps = checkForMoreProperties(pattern, item.id, solutionIndex, hfIndex).length > 0
    const addPropButton = !readOnly && hasMoreProps ? (
      <Button
        onClick={() => onAddProperty(item.id, solutionIndex, hfIndex)}
        icon="add"
        iconPosition="left"
      >
        Add another element
      </Button>
    ) : null
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const isListOfInputs = Array.isArray(input)
    const hasMoreThanOneItem = input.length > 1
    const addButton = !readOnly && (isSolutionLayer || isHF) ? (
      <Button
        className="solution-btn"
        onClick={isHF ? () => addPatternSolution(solutionIndex) : addPatternSolution}
        icon="add"
        iconPosition="left"
      >
        {`Add ${isHF ? 'Emotion / HumanFactor' : 'Solution'}`}
      </Button>
    ) : null
    const content = isNewSection ? (
      <Accordion startsExpanded title={item.label}>
        {input}
        {!readOnly && !isListOfInputs ? (addPropButton) : null}
        {addButton}
      </Accordion>
    ) : (
      <FieldContainer
        className={
          isListOfInputs && hasMoreThanOneItem ? `carouselContainer ${isHF ? 'hfItem' : ''}` : ''
        }
      >
        <Label>{item.label}</Label>
        <div className="fieldInputContainer">
          {isListOfInputs && hasMoreThanOneItem ?
            <Slider {...settings}>
              {input}
            </Slider> :
            input
          }
        </div>
        {addButton}
      </FieldContainer>
    )
    return (
      <div key={idx}>
        {content}
      </div>
    )
  })
  return (
    <div>
      {formFields}
    </div>
  )
}

FormInput.propTypes = {
  fields: PropTypes.array,
  onChange: PropTypes.func,
  onAddProperty: PropTypes.func,
  readOnly: PropTypes.bool,
  editMode: PropTypes.bool,
}

FormInput.defaultProps = {
  readOnly: false,
  editMode: false,
  fields: '',
}

FormInput.displayName = 'FormInput'

export default FormInput
