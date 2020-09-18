import React, { Component } from 'react';
import { DoorClosed } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import '../App.css';


class NavBar extends Component {
    render() {
        return (
            <div className='nav-container'>
                <div className='navbar'>
                    <img className='avatar' src={this.props.userObj.photoURL} alt='avatar' /> 
                    <img src={process.env.PUBLIC_URL + '/crow.png'} alt='crow'/> 
                    <h4> choosr - lose it then choose it!</h4>
                    <DoorClosed className='nav-icon'/> 
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userObj: state.userObj,
        loggedIn: state.loggedIn
    }
  }

export default connect(mapStateToProps, null)(NavBar)
