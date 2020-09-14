import React, { Component } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";

class Login extends Component {

handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
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

export default Login;
