import React from 'react';
import './App.css';
import Login from './components/Login'
import NavBar from './components/NavBar'
import Dash from './components/Dash'
import Footer from './components/Footer'
import ChoosieProcess from './components/ChoosieProcess'
import ChoosieStart from './components/ChoosieStart'
import ChoosieFinish from './components/ChoosieFinish'
import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom";

//choosieCard button handles redux store state of category
//category store state gets passed into chooseprocess


function App(props) {
  return (
    <div className=''>
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
        <Route exact path="/choosie">
          <ChoosieProcess />
        </Route>

        <Route exact path="/choosie/start">
          <ChoosieStart />
        </Route>  

        <Route exact path='/choosie/finish'>
          <div>
            <NavBar/>
            <ChoosieFinish />
            <Footer/>
          </div>
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
