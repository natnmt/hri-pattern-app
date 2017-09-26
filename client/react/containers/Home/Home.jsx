// external imports
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// internal imports
import { searchPattern, deletePattern } from '../../actions/DataAction'
import { setPattern, setTextSearchPattern } from '../../actions/PatternAction'
import SearchInput from '../../components/Form/SearchInput'
import Button from '../../components/Button/Button'
import ListItems from '../../components/ListItems/ListItems'

const Home = ({ patterns, textSearch, searchPatterns, setPattern, deletePattern, setTextSearchPattern }) => (
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
      onDeleteClick={deletePattern}
      linkView="./view"
      linkEdit="./edit"
    />
  </div>
)

const mapStateToProps = (state) => ({
  patterns: state.pattern.searchedPatterns,
  textSearch: state.pattern.textSearch,
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
