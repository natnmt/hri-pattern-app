// external imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// internal imports
import { getPatternUIStructure, getPropertiesNotSelected, getSolutionPropertiesNotSelected, validatePattern } from '../../utils/PatternUIStructure'
import { updatePatternProperties, resetPattern, addProperty, updatePatternSolutionProperty, addPatternSolution, addSolutionProperty } from '../../actions/PatternAction'
import { savePattern, updatePattern } from '../../actions/PatternDataAction'
import { togglePropertyDialogVisibility } from '../../actions/ToggleUIAction'
import Footer from '../../components/Form/Footer'
import Button from '../../components/Button/Button'
import FormInput from '../../components/Form/FormInput'
import PropertiesDialog from '../../components/Dialog/PropertiesDialog'

class PatternForm extends Component {
  static defaultProps = {
    dbMessages: [],
  }

  constructor() {
    super()
    this.state = {
      nestedKey: null,
      solutionIndex: null,
      message: [],
    }
  }

  changeKey = (key) => {
    this.setState({ nestedKey: key })
  }

  changeSolutionIndex = (index) => {
    this.setState({ solutionIndex: index })
  }

  handlePatternValidation = (pattern, patternStructure, onFinish) => {
    const message = validatePattern(pattern, patternStructure)
    this.setState({
      message,
    })
    if (message.length === 0) {
      if (this.props.location.pathname === '/add') {
        this.props.savePattern(pattern, onFinish)
      }
      else {
        this.props.updatePattern(pattern, onFinish)
      }
    }
  }

  returnToHomePage = () => {
    this.props.history.push('/')
  }

  render = () => {
    const {
      location, pattern, updatePatternProperty, resetPatternData, propertyDialogVisibility,
      togglePropertyDialogVisibility, addProperty, dbMessages, updatePatternSolutionProperty,
      addPatternSolution, addSolutionProperty,
    } = this.props
    const { nestedKey, solutionIndex, message } = this.state
    const readOnly = location.pathname === '/view'
    const messages = message.map((item, index) =>
      <p key={index} className="error">
        <span>* </span>
        {item}
      </p>
    )
    const addPropButton = !readOnly ? (
      <Button
        onClick={() => { this.changeKey(null); togglePropertyDialogVisibility(true) }}
        icon="add"
        iconPosition="left"
      >
        Add another property
      </Button>
    ) : null
    const dbMessagesElements = dbMessages.map((item, index) =>
      <p key={index} className="error">
        <span>* </span>
        {item}
      </p>
    )
    const onPropertyDialogCancel = () => {
      togglePropertyDialogVisibility(false);
      this.changeKey(null);
      this.changeSolutionIndex(null)
    }
    return (
      <div className={['PatternForm', readOnly ? 'readOnly' : ''].join(' ')}>
        Pattern Form
        <FormInput
          readOnly={readOnly}
          editMode={location.pathname === '/edit'}
          fields={getPatternUIStructure(pattern)}
          pattern={pattern}
          onChange={updatePatternProperty}
          onAddPatternSolution={addPatternSolution}
          onSolutionChange={updatePatternSolutionProperty}
          onAddSolutionProperty={(index) => { this.changeSolutionIndex(index); togglePropertyDialogVisibility(true) }}
          onAddProperty={(id) => { this.changeKey(id); togglePropertyDialogVisibility(true) }}
        />
        {addPropButton}
        <Footer
          onConfirm={() => {
            this.handlePatternValidation(pattern, getPatternUIStructure(pattern), this.returnToHomePage)
          }}
          confirmLabel="Save"
          onCancel={resetPatternData}
          cancelLabel="Cancel"
          readOnly={readOnly}
        />
        <div className="message">
          {messages}
          {dbMessagesElements}
        </div>
        <PropertiesDialog
          properties={solutionIndex !== null ?
            getSolutionPropertiesNotSelected(pattern, solutionIndex) :
            getPropertiesNotSelected(pattern, nestedKey)
          }
          visibility={propertyDialogVisibility}
          onCancel={onPropertyDialogCancel}
          onClose={onPropertyDialogCancel}
          onConfirm={(selectedProps) => {
            solutionIndex !== null ? addSolutionProperty(selectedProps, solutionIndex) : addProperty(selectedProps);
            onPropertyDialogCancel()
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pattern: state.pattern.patternToBeSaved,
  propertyDialogVisibility: state.toggle.propertyDialogVisibility,
  dbMessages: state.pattern.message,
})

const mapDispatchToProps = (dispatch) => ({
  updatePatternProperty: (key, value) => {
    dispatch(updatePatternProperties(key, value))
  },
  addProperty: (properties) => {
    dispatch(addProperty(properties))
  },
  updatePattern: (patternObj, onFinish) => {
    dispatch(updatePattern(patternObj, onFinish))
  },
  savePattern: (patternObj, onFinish) => {
    dispatch(savePattern(patternObj, onFinish))
  },
  addPatternSolution: () => {
    dispatch(addPatternSolution())
  },
  addSolutionProperty: (properties, index) => {
    dispatch(addSolutionProperty(properties, index))
  },
  updatePatternSolutionProperty: (key, index, value) => {
    dispatch(updatePatternSolutionProperty(key, index, value))
  },
  resetPatternData: () => {
    dispatch(resetPattern())
  },
  togglePropertyDialogVisibility: (visibility) => {
    dispatch(togglePropertyDialogVisibility(visibility))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PatternForm))
