import React, { Component } from 'react';

class CinemaItem extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='item-card'>
                <h5> {this.props.title}</h5>
                <p> IMDb Rating : {this.props.rating}</p>
                <img className='item-movie-image' src={this.props.photo} alt='poster'/>
            </div>
        );
    }
}

export default CinemaItem;
