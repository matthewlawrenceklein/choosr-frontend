import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { DoorClosed } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import '../App.css';


class NavBar extends Component {
    render() {
        return (
            <div className='navbar'>
                <Container>
                    <Row>
                        <Col> <img className='avatar' src={this.props.userObj.photoURL} alt='avatar' /> </Col>
                        <Col xs={6}> 
                            <img src={process.env.PUBLIC_URL + '/crow.png'} alt='crow'/> 
                            <h4> choosr - choose it or lose it</h4>
                        </Col>
                        <Col> <DoorClosed className='nav-icon'/> </Col>
                    </Row>
                </Container>
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
