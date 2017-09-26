// external imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
// internal imports
import { getPatternUIStructure, getPropertiesNotSelected, validatePattern } from '../../utils/PatternUIStructure'
import { updatePatternProperty, resetPattern, addProperty } from '../../actions/PatternAction'
import { savePattern, updatePattern } from '../../actions/DataAction'
import { toggleDialogVisibility } from '../../actions/ToggleUIAction'
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
      message: [],
    }
  }

  changeKey = (key) => {
    this.setState({ nestedKey: key })
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
      location, pattern, updatePatternProperty, resetPatternData, dialogVisibility, toggleDialogVisibility,
      addProperty, dbMessages,
    } = this.props
    const readOnly = location.pathname === '/view'
    const messages = this.state.message.map((item, index) =>
      <p key={index} className="error">
        <span>* </span>
        {item}
      </p>
    )
    const confirmButton = readOnly ? null : (
      <Button
        onClick={() => {
          this.handlePatternValidation(pattern, getPatternUIStructure(pattern), this.returnToHomePage)
        }}
      >
        Save
      </Button>
    )
    const addPropButton = !readOnly ? (
      <Button
        onClick={() => { this.changeKey(null); toggleDialogVisibility(true) }}
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
    return (
      <div className={['PatternForm', readOnly ? 'readOnly' : ''].join(' ')}>
        Pattern Form
        <FormInput
          readOnly={readOnly}
          editMode={location.pathname === '/edit'}
          fields={getPatternUIStructure(pattern)}
          pattern={pattern}
          onChange={updatePatternProperty}
          onAddProperty={(id) => { this.changeKey(id); toggleDialogVisibility(true) }}
        />
        {addPropButton}
        <div className="footer">
          <Link to="/">
            <Button onClick={resetPatternData} secondaryColor >
              Cancel
            </Button>
          </Link>
          {confirmButton}
        </div>
        <div className="message">
          {messages}
          {dbMessagesElements}
        </div>
        <PropertiesDialog
          properties={getPropertiesNotSelected(pattern, this.state.nestedKey)}
          visibility={dialogVisibility}
          onCancel={() => toggleDialogVisibility(false)}
          onClose={() => toggleDialogVisibility(false)}
          onConfirm={(selectedProps) => { addProperty(selectedProps); toggleDialogVisibility(false) }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pattern: state.pattern.patternToBeSaved,
  dialogVisibility: state.toggle.dialogVisibility,
  dbMessages: state.pattern.message,
})

const mapDispatchToProps = (dispatch) => ({
  updatePatternProperty: (key, value) => {
    dispatch(updatePatternProperty(key, value))
  },
  resetPatternData: () => {
    dispatch(resetPattern())
  },
  toggleDialogVisibility: (visibility) => {
    dispatch(toggleDialogVisibility(visibility))
  },
  addProperty: (property) => {
    dispatch(addProperty(property))
  },
  savePattern: (patternObj, onFinish) => {
    dispatch(savePattern(patternObj, onFinish))
  },
  updatePattern: (patternObj, onFinish) => {
    dispatch(updatePattern(patternObj, onFinish))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PatternForm))
