// external imports
import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// internal imports
import Loading from '../components/Loading/Loading'
import NavBar from '../components/NavBar/NavBar'
import Home from './Home/Home'
import PatternForm from './Form/PatternForm'
import PersonaForm from './Form/PersonaForm'
import './Containers.css'

const App = ({ loadingVisibility }) => (
  <Router>
    <div>
      <NavBar logo="HRI Pattens Respository" logoLink="/" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={PatternForm} />
        <Route path="/edit" component={PatternForm} />
        <Route path="/view" component={PatternForm} />
        <Route path="/addpersona" component={PersonaForm} />
        <Route path="/editpersona" component={PersonaForm} />
        <Route path="/viewpersona" component={PersonaForm} />
      </Switch>
      <Loading visibility={loadingVisibility} />
    </div>
  </Router>
)

const mapStateToProps = (state) => ({
  loadingVisibility: state.toggle.loadingVisibility,
})

export default connect(mapStateToProps, null)(App)
