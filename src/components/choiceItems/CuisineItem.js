import React, { Component } from 'react';

class CuisineItem extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='item-card'>
                <h3>{this.props.title}</h3>
                <img className='item-image' src={this.props.image} alt='food'/>
            </div>
        );
    }
}

export default CuisineItem;
