import React, { Component } from 'react';

class FinalCuisineItem extends Component {
    render() {
        return (
            <div className='container'>
                <div className='final-cuisine'>
                    <h2> You Chose {this.props.category}</h2>
                    <h3> Check Out This Recommendation</h3>
                    <h1>{this.props.name}</h1>
                    <img className='final-image' src={this.props.image} alt='food' />
                    <h5>{this.props.location}</h5>
                    <a id='cuisine-menu-link' href={this.props.menu}>Menu</a>
                </div>
            </div>
        );
    }
}

export default FinalCuisineItem;
