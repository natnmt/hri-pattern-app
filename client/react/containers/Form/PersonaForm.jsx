// external imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
// internal imports
import { personaUIStructure, validatePersona } from '../../utils/PersonaUIStructure'
import { getInput } from '../../utils/InputValidation'
import { updatePersonaProperty, resetPersona } from '../../actions/PersonaAction'
import { savePersona, updatePersona } from '../../actions/PersonaDataAction'
import Footer from '../../components/Form/Footer'
import Button from '../../components/Button/Button'
import Label from '../../components/Form/Label'
import FieldContainer from '../../components/Form/FieldContainer'
import FormInput from '../../components/Form/FormInput'

class PersonaForm extends Component {
  static defaultProps = {
    dbMessages: [],
  }

  constructor() {
    super()
    this.state = {
      message: [],
    }
  }

  handlePersonaValidation = (persona, onFinish) => {
    const message = validatePersona(persona)
    this.setState({
      message,
    })
    if (message.length === 0) {
      if (this.props.location.pathname === '/addpersona') {
        this.props.savePersona(persona, onFinish)
      }
      else {
        this.props.updatePersona(persona, onFinish)
      }
    }
  }

  returnToHomePage = () => {
    this.props.history.push('/')
  }

  render = () => {
    const {
      location, persona, dbMessages, updatePersonaProperty, resetPersonaData,
    } = this.props
    const readOnly = location.pathname === '/viewpersona'
    const messages = this.state.message.map((item, index) =>
      <p key={index} className="error">
        <span>* </span>
        {item}
      </p>
    )
    const dbMessagesElements = dbMessages.map((item, index) =>
      <p key={index} className="error">
        <span>* </span>
        {item}
      </p>
    )
    const inputs = personaUIStructure.map(item => {
      const value = persona.hasOwnProperty(item.id) ? persona[item.id] : ''
      const placeholder = item.hasOwnProperty('placeholder') ? item.placeholder : ''
      const content = !readOnly || (readOnly && value.length > 0) ? (
        <FieldContainer key={item.id}>
          <Label>{item.label}</Label>
          { getInput(item.id, item.type, item.inputType, value, updatePersonaProperty, item.options, readOnly, placeholder) }
        </FieldContainer>
      ) : null
      return (content)
    })
    return (
      <div className={['PersonaForm', readOnly ? 'readOnly' : ''].join(' ')}>
        Persona Form
        {inputs}
        <Footer
          onConfirm={() => {
            this.handlePersonaValidation(persona, this.returnToHomePage)
          }}
          confirmLabel="Save"
          onCancel={resetPersonaData}
          cancelLabel="Cancel"
          readOnly={readOnly}
        />
        <div className="message">
          {messages}
          {dbMessagesElements}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  persona: state.persona.personaToBeSaved,
  dbMessages: state.persona.message,
})

const mapDispatchToProps = (dispatch) => ({
  updatePersonaProperty: (key, value) => {
    dispatch(updatePersonaProperty(key, value))
  },
  resetPersonaData: () => {
    dispatch(resetPersona())
  },
  savePersona: (personaObj, onFinish) => {
    dispatch(savePersona(personaObj, onFinish))
  },
  updatePersona: (personaObj, onFinish) => {
    dispatch(updatePersona(personaObj, onFinish))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PersonaForm))
