// external imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
// internal imports
import { getPatternUIStructure, getPropertiesNotSelected, validatePattern } from '../../utils/PatternUIStructure'
import {
  updatePatternPropertyValue, resetPattern, addPatternPropertyValue, addSolution,
  deleteOnePatternProperty, deleteOneSolutionsLayer,
} from '../../actions/PatternAction'
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
      solutionIndex: null,
      hfIndex: null,
      message: [],
    }
  }

  componentWillMount = () => {
    if (this.props.location.pathname === '/add') {
      this.props.resetPatternData()
    }
  }

  changeKey = (key) => {
    this.setState({ nestedKey: key })
  }

  changeSolutionIndex = (index) => {
    this.setState({ solutionIndex: Number.isInteger(index) ? index : null })
  }

  changeHumanFactorsIndex = (index) => {
    this.setState({ hfIndex: Number.isInteger(index) ? index : null })
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
      location, pattern, updatePatternProperty, resetPatternData, dialogVisibility, changeDialogVisibility,
      addPatternProperty, dbMessages, addPatternSolution, deleteProperty, deleteSolution,
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
        onClick={() => { this.changeKey(null); this.changeSolutionIndex(null); this.changeHumanFactorsIndex(null); changeDialogVisibility(true) }}
        icon="add"
        iconPosition="left"
      >
        Add another element
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
          onAddProperty={(id, solutionIndex, hfIndex) => {
            this.changeKey(id);
            this.changeSolutionIndex(solutionIndex);
            this.changeHumanFactorsIndex(hfIndex);
            changeDialogVisibility(true);
          }}
          checkForMoreProperties={(patternObj, id, solutionIndex, hfindex) => getPropertiesNotSelected(patternObj, id, solutionIndex, hfindex)}
          addPatternSolution={addPatternSolution}
          deleteProperty={deleteProperty}
          deleteSolution={deleteSolution}
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
          properties={getPropertiesNotSelected(pattern, this.state.nestedKey, this.state.solutionIndex, this.state.hfIndex)}
          visibility={dialogVisibility}
          onCancel={() => changeDialogVisibility(false)}
          onClose={() => changeDialogVisibility(false)}
          onConfirm={(selectedProps) => { addPatternProperty(selectedProps, this.state.solutionIndex, this.state.hfIndex); changeDialogVisibility(false) }}
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
  updatePatternProperty: (key, value, index, hfIndex) => {
    dispatch(updatePatternPropertyValue(key, value, index, hfIndex))
  },
  resetPatternData: () => {
    dispatch(resetPattern())
  },
  changeDialogVisibility: (visibility) => {
    dispatch(toggleDialogVisibility(visibility))
  },
  addPatternProperty: (properties, index, hfIndex) => {
    dispatch(addPatternPropertyValue(properties, index, hfIndex))
  },
  addPatternSolution: (index) => {
    dispatch(addSolution(index))
  },
  savePattern: (patternObj, onFinish) => {
    dispatch(savePattern(patternObj, onFinish))
  },
  updatePattern: (patternObj, onFinish) => {
    dispatch(updatePattern(patternObj, onFinish))
  },
  deleteProperty: (key, index, hfIndex) => {
    dispatch(deleteOnePatternProperty(key, index, hfIndex))
  },
  deleteSolution: (index, hfIndex) => {
    dispatch(deleteOneSolutionsLayer(index, hfIndex))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PatternForm))
