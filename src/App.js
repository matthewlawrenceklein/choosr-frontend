import React from 'react';
import './App.css';
import Login from './components/Login'
import { connect } from 'react-redux'

function App(props) {
  return (
    <div className="App">
      { props.loggedIn ? <h3>hey</h3>: < Login />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      userObj: state.userObj,
      loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, null)(App)