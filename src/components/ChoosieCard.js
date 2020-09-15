import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ChoosieCard extends Component {

   
    render() {
        return (
            <div className='choosie-card'>
                <h3 className='choosie-title'> {this.props.title}</h3>
                <img src={this.props.image} alt='item' className='choosie-image' />
                <br></br>
                <Button className='choosie-button'> Get it!</Button>
            </div>
        );
    }
}

export default ChoosieCard;
