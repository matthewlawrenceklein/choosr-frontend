import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCategory } from '../actions/index'




class ChoosieCard extends Component {

    setCat = (category) => {
        this.props.setCategory(category)
    }
   
    render() {
        return (
            <div className='choosie-card'>
                <h3 className='choosie-title'> {this.props.title}</h3>
                <img src={this.props.image} alt='item' className='choosie-image' />
                <br></br>
                <Link to='/choosie'>
                    <Button className='choosie-button' onClick={ () => this.setCat(this.props.category) }> {this.props.buttonText}</Button>
                </Link>
            </div>
        );
    }
}

const mapDispatchToProps = {
    setCategory
  }

export default connect(null, mapDispatchToProps)(ChoosieCard)
