import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import NavBar from './components/NavBar'
import Dash from './components/Dash'
import Footer from './components/Footer'
import ChoosieProcess from './components/ChoosieProcess'
import ChoosieStart from './components/ChoosieStart'
import ChoosieFinish from './components/ChoosieFinish'
import { connect } from 'react-redux'
import { setUser } from './actions/index'
import { loggedIn } from './actions/index'
import { Route, Switch } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
// import { render } from 'react-dom';

//choosieCard button handles redux store state of category
//category store state gets passed into chooseprocess


class App extends Component {

  componentDidMount(){
   
    //   this.props.setUser(localStorage.getItem('user'))
    
    if(localStorage.getItem('user')){

      const db = firebase.firestore();
      let matchUserList = []
  
      db.collection("users").where("email", "==", localStorage.getItem('user'))
          .get().then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                  matchUserList.push(doc.data())
              });
              console.log(matchUserList[0])
              this.props.setUser(matchUserList[0])
              this.props.loggedIn(true)
          });
    }
    
      
    
    
    
    
    
    
    } 
  

  render(){
    return (
      <div className=''>
        <Switch>
          <Route exact path="/">
            { this.props.isLoggedIn ? 
            <div>
              < NavBar/>
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
  }}

  

const mapStateToProps = (state) => {
  return {
      cuurentUserObj: state.userObj,
      isLoggedIn: state.loggedIn,
      setCategory: state.setCategory
  }
}

const mapDispatchToProps = {
  setUser,
  loggedIn
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
