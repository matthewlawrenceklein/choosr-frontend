import React from 'react';
import './App.css';
import Login from './components/Login'
import NavBar from './components/NavBar'
import Dash from './components/Dash'
import Footer from './components/Footer'
import ChoosieProcess from './components/ChoosieProcess'
import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom";

//choosieCard button handles redux store state of category
//category store state gets passed into chooseprocess


function App(props) {
  return (
    <div className='App'>
      <Switch>
        <Route exact path="/">
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
        </Route>
        <Route path="/choosie">
          <ChoosieProcess />
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      userObj: state.userObj,
      loggedIn: state.loggedIn,
      setCategory: state.setCategory
  }
}

export default connect(mapStateToProps, null)(App)
