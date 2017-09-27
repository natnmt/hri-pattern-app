// external imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// internal imports
import { searchPattern, deletePattern } from '../../actions/DataAction'
import { setPattern, setTextSearchPattern } from '../../actions/PatternAction'
import { toggleDeleteDialogVisibility } from '../../actions/ToggleUIAction'
import SearchInput from '../../components/Form/SearchInput'
import Button from '../../components/Button/Button'
import Dialog from '../../components/Dialog/Dialog'
import ListItems from '../../components/ListItems/ListItems'

class Home extends Component {
  constructor({ startsExpanded = false }) {
    super()
    this.state = {
      patternId: '',
    }
  }

  setPatternId = (patternId) => {
    this.setState({ patternId })
  }

  render = () => {
    const {
      patterns, textSearch, searchPatterns, setPattern, deletePattern, setTextSearchPattern,
      deleteDialogVisibility, toggleDeleteDialogVisibility,
    } = this.props
    const { patternId } = this.state
    return (
      <div className="Home">
        <h3>Welcome to the HRI Patterns Respository Application</h3>
        <p>Here you can search, insert, edit and evaluate the interface and interfaction pattern from HRI field.</p>
        <p>Select what you want to do by clicking in "Add" to insert a new pattern or by typing in the input for search existing patterns.</p>
        <div className="inputsContainer">
          <Link to="/add">
            <Button
              onClick={() => {}}
              icon="add"
              iconPosition="right"
            >
              Add
            </Button>
          </Link>
          <div> OR </div>
          <SearchInput
            value={textSearch}
            buttonLabel="Search"
            placeholder="Search a pattern"
            onChange={setTextSearchPattern}
            onClick={searchPatterns}
          />
        </div>
        <ListItems
          items={patterns}
          onViewClick={setPattern}
          onEditClick={setPattern}
          onDeleteClick={(id) => { this.setPatternId(id); toggleDeleteDialogVisibility(true); }}
          linkView="./view"
          linkEdit="./edit"
        />
        <Dialog
          title="Delete pattern"
          visibility={deleteDialogVisibility}
          onClose={() => toggleDeleteDialogVisibility(false)}
          cancelLabel="NO"
          onCancel={() => toggleDeleteDialogVisibility(false)}
          onConfirm={() => { deletePattern(patternId); toggleDeleteDialogVisibility(false); }}
          confirmLabel="YES"
        >
          <p>Are you sure you want to delete this pattern?</p>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  patterns: state.pattern.searchedPatterns,
  textSearch: state.pattern.textSearch,
  deleteDialogVisibility: state.toggle.deleteDialogVisibility,
})

const mapDispatchToProps = (dispatch) => ({
  searchPatterns: (text) => {
    dispatch(searchPattern(text))
  },
  setPattern: (id) => {
    dispatch(setPattern(id))
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
