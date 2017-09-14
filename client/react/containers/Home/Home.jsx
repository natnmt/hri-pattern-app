// external imports
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// internal imports
import { searchPattern } from '../../actions/DataAction'
import { setPattern } from '../../actions/PatternAction'
import SearchInput from '../../components/Form/SearchInput'
import Button from '../../components/Button/Button'
import ListItems from '../../components/ListItems/ListItems'

const Home = ({ patterns, searchPatterns, setPattern }) => (
  <div className="Home">
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
        buttonLabel="Search"
        placeholder="Search a pattern"
        onClick={searchPatterns}
      />
    </div>
    <ListItems
      items={patterns}
      onViewClick={setPattern}
      onEditClick={setPattern}
      linkView="./view"
      linkEdit="./edit"
    />
  </div>
)

const mapStateToProps = (state) => ({
  patterns: state.pattern.searchedPatterns,
})

const mapDispatchToProps = (dispatch) => ({
  searchPatterns: (text) => {
    dispatch(searchPattern(text))
  },
  setPattern: (id) => {
    dispatch(setPattern(id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
