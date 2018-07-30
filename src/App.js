import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Loadable from 'react-loadable';
import {connect } from 'react-redux'

import MainNavbar from './components/Nav'
import Home from './routes/Home'
import { searchProjects, setSearchField, fetchAllProjects } from './action';

const Loading = () => <div>Loading...</div>;

const About = Loadable({
  loader: () => import('./routes/About'),
  loading: Loading,
});

class App extends Component {
  componentDidMount() {
    this.props.fetchAllProjects()
  }
  componentDidUpdate() {
    console.log('updated')
  }
  render() {
    return (
      <div>
        <MainNavbar title="Project-ers"/>
        <Router>
          <Switch>
            <Home searchChange={this.props.onSearchChange} 
                  submitSearch={() => this.props.onSubmitSearch(this.props.searchField)}
                  allProjects={this.props.fetch_Returned}
                  />
            <Route path="/about" component={About}/>
          </Switch>
        </Router>
      </div>
      
    );
  }
}

const matchStateToProps = state => ({
  searchField: state.setSearchField.searchField,
  isPending: state.searchProjects.isPending,
  projectsReturned: state.searchProjects.result,
  error: state.searchProjects.error,
  isPending_fetch: state.fetchAllProjects.isPending,
  error_fetch: state.fetchAllProjects.error,
  fetch_Returned: state.fetchAllProjects.fetch_Returned
})
const matchDispatchToProps = dispatch => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onSubmitSearch: (searchValue) => dispatch(searchProjects(searchValue)),
  fetchAllProjects: () => dispatch(fetchAllProjects())
})

export default connect(matchStateToProps, matchDispatchToProps)(App);
