import React, { Component } from 'react';
import { DoorClosed } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { loggedIn } from '../actions/index'
import { setUser } from '../actions/index'
import '../App.css';



class NavBar extends Component {

    handleLogOut = () => {
        this.props.loggedIn(false)
        localStorage.clear()
    }

    render() {
        return (
            <div className='nav-container'>
                <div className='navbar'>
                    <img className='avatar' src={this.props.userObj.photoURL} alt='avatar' /> 

                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + '/crow.png'} alt='crow' className='nav-crow'/> 
                    </Link>

                    <h4> choosr - lose it then choose it!</h4>
                    <DoorClosed onClick={ this.handleLogOut }className='nav-icon'/> 
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

  const mapDispatchToProps = {
    setUser,
    loggedIn
  }

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
