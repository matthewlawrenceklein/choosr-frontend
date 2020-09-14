import React from 'react';
import './App.css';
import Login from './components/Login'
import NavBar from './components/NavBar'
import Dash from './components/Dash'
import Footer from './components/Footer'
import { connect } from 'react-redux'

function App(props) {
  return (
    <div className="App">
      { props.loggedIn ? 
       <div>
         < NavBar />
         < Dash />
         < Footer />
       </div>
      : 
      <div>
        < Login />
        < Footer />
      </div>
      }

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
