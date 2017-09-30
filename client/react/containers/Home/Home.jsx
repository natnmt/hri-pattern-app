// external imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// internal imports
import { searchPattern, deletePattern } from '../../actions/PatternDataAction'
import { searchPersona, deletePersona } from '../../actions/PersonaDataAction'
import { setPatternObject, setTextSearchPattern } from '../../actions/PatternAction'
import { setPersonaObject, setTextSearchPersona } from '../../actions/PersonaAction'
import { toggleDeleteDialogVisibility } from '../../actions/ToggleUIAction'
import SearchInput from '../../components/Form/SearchInput'
import Button from '../../components/Button/Button'
import Dialog from '../../components/Dialog/Dialog'
import ListPatterns from '../../components/ListItems/ListPatterns'
import ListPersonas from '../../components/ListItems/ListPersonas'

class Home extends Component {
  constructor({ startsExpanded = false }) {
    super()
    this.state = {
      patternId: '',
      personaId: '',
    }
  }

  setPatternId = (patternId) => {
    this.setState({ patternId })
  }

  setPersonaId = (personaId) => {
    this.setState({ personaId })
  }

  render = () => {
    const {
      patterns, textPatternSearch, searchPatterns, setPattern, deletePattern, setTextSearchPattern,
      deleteDialogVisibility, toggleDeleteDialogVisibility, personas, textPersonaSearch, searchPersonas,
      setTextSearchPersona, deletePersona, setPersona, patternMessage, personaMessage,
    } = this.props

    const { patternId, personaId } = this.state
    const isPatternToBeDeleted = patternId.length > 0
    const onDelete = patternId.length > 0
    return (
      <div className="Home">
        <h3>Welcome to the HRI Patterns Respository Application</h3>
        <p>Here you can search, insert, edit and evaluate the interface and interfaction pattern from HRI field.</p>
        <p>Select what you want to do by clicking in "Add" to insert a new pattern or by typing in the input for search existing patterns.</p>
        <div className="listContainer">
          <div className="rowContainer">
            <Link to="/add">
              <Button
                onClick={() => {}}
                icon="add"
                iconPosition="right"
              >
                Add Pattern
              </Button>
            </Link>
            <div className="label"> OR </div>
            <SearchInput
              value={textPatternSearch}
              placeholder="Search Pattern"
              onChange={setTextSearchPattern}
              onClick={searchPatterns}
            />
          </div>
          {patternMessage && patternMessage.length > 0  ?
            <div className="searchMessage">{patternMessage}</div> : null
          }
          <ListPatterns
            items={patterns}
            onViewClick={setPattern}
            onEditClick={setPattern}
            onDeleteClick={(id) => { this.setPatternId(id); toggleDeleteDialogVisibility(true); }}
            linkView="./view"
            linkEdit="./edit"
          />
          <div className="rowContainer">
            <Link to="/addpersona">
              <Button
                onClick={() => {}}
                icon="add"
                iconPosition="right"
              >
                Add Persona
              </Button>
            </Link>
            <div className="label"> OR </div>
            <SearchInput
              value={textPersonaSearch}
              placeholder="Search Persona"
              onChange={setTextSearchPersona}
              onClick={searchPersonas}
            />
          </div>
          {personaMessage && personaMessage.length > 0 ?
            <div className="searchMessage">{personaMessage}</div> : null
          }
          <ListPersonas
            items={personas}
            onViewClick={setPersona}
            onEditClick={setPersona}
            onDeleteClick={(id) => { this.setPersonaId(id); toggleDeleteDialogVisibility(true); }}
            linkView="./viewpersona"
            linkEdit="./editpersona"
          />
        </div>
        <Dialog
          title={`Delete ${isPatternToBeDeleted ? 'pattern' : 'persona'}`}
          visibility={deleteDialogVisibility}
          onClose={() => toggleDeleteDialogVisibility(false)}
          cancelLabel="NO"
          onCancel={() => toggleDeleteDialogVisibility(false)}
          onConfirm={() => {
            isPatternToBeDeleted ? deletePattern(patternId) : deletePersona(personaId);
            this.setPatternId('');
            this.setPersonaId('');
            toggleDeleteDialogVisibility(false);
          }}
          confirmLabel="YES"
        >
          <p>{`Are you sure you want to delete this ${isPatternToBeDeleted ? 'pattern' : 'persona'}`}?</p>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  patterns: state.pattern.searchedPatterns,
  textPatternSearch: state.pattern.textSearch,
  patternMessage: state.pattern.message,
  deleteDialogVisibility: state.toggle.deleteDialogVisibility,
  personas: state.persona.searchedPersonas,
  textPersonaSearch: state.persona.textSearch,
  personaMessage: state.persona.message,
})

const mapDispatchToProps = (dispatch) => ({
  searchPatterns: (text) => {
    dispatch(searchPattern(text))
  },
  setPattern: (pattern) => {
    dispatch(setPatternObject(pattern))
  },
  setTextSearchPattern: (text) => {
    dispatch(setTextSearchPattern(text))
  },
  deletePattern: (id) => {
    dispatch(deletePattern(id))
  },
  toggleDeleteDialogVisibility: (visibility) => {
    dispatch(toggleDeleteDialogVisibility(visibility))
  },
  searchPersonas: (text) => {
    dispatch(searchPersona(text))
  },
  setPersona: (persona) => {
    dispatch(setPersonaObject(persona))
  },
  setTextSearchPersona: (text) => {
    dispatch(setTextSearchPersona(text))
  },
  deletePersona: (id) => {
    dispatch(deletePersona(id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
