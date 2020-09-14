import React, { Component } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import { connect } from 'react-redux'
import { setUser } from '../actions/index'
import { loggedIn } from '../actions/index'

class Login extends Component {

handleGoogleSignIn = () => {
    const db = firebase.firestore();
    const provider = new firebase.auth.GoogleAuthProvider();
    let matchUserList = []
    firebase.auth().signInWithPopup(provider).then((result) => {
        var token = result.credential.accessToken;
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
                    this.props.loggedIn(true)

                } else {
                    this.props.setUser(matchUserList[0])
                    this.props.loggedIn(true)

                }
        });
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

 }

handleGitHubSignIn = () => {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        const { photoURL, email, displayName } = result.user 

        console.log(displayName)
        console.log(email)
        console.log(photoURL)
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });    
}


    render() {
        return (
            <div>
                <button onClick={ this.handleGoogleSignIn }>login with google</button>
                <button onClick={ this.handleGitHubSignIn }>login with github</button>
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
