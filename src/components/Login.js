import React, { Component } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import { connect } from 'react-redux'
import { setUser } from '../actions/index'
import { loggedIn } from '../actions/index'




class Login extends Component {

handleSignIn = (provider) => {
    const db = firebase.firestore();
    let matchUserList = []
    
    firebase.auth().signInWithPopup(provider).then((result) => {
        // var token = result.credential.accessToken;
        const { photoURL, email, displayName } = result.user

        const userObj = {
            photoURL : photoURL,
            email : email, 
            displayName : displayName
        }
        
        db.collection("users").where("email", "==", userObj.email)
        .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                matchUserList.push(doc.data())
            });
                if (matchUserList.length === 0){
                    db.collection("users").add(userObj)
                    this.props.setUser(userObj)
                    localStorage.setItem('user', userObj.email)
                    this.props.loggedIn(true)


                } else {
                    // this.props.setUser(matchUserList[0])
                    localStorage.setItem('user', matchUserList[0].email)
                    this.props.setUser(matchUserList[0])
                    this.props.loggedIn(true)

                }
        });
      }).catch(function(error) {
        console.log(error)
      });
 }
    render() {
        return (
            <div className='container'>
                <div className='login' >
                    <img className='nav-crow login-item' src={process.env.PUBLIC_URL + '/crow.png'} alt='crow'/> 
                    <br></br>
                    <button className='login-item' onClick={ () => this.handleSignIn(new firebase.auth.GoogleAuthProvider()) }>login with google</button>
                    <br></br>
                    <button className='login-item' onClick={ () => this.handleSignIn(new firebase.auth.GithubAuthProvider()) }>login with github</button>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = {
    setUser,
    loggedIn
  }

const mapStateToProps = (state) => {
    return {
        userObj: state.userObj
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
