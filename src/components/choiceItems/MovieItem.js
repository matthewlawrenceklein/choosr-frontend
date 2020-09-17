import React, { Component } from 'react';

class MovieItem extends Component {
    render() {
        return (
            <div className='item-card'>
                <h3>{this.props.title}</h3>
                {/* <h6>{this.props.overview}</h6> */}
                <img className='item-movie-image' src={`https://image.tmdb.org/t/p/w200/${this.props.poster}`} alt='poster'/>
            </div>
        );
    }
}

export default MovieItem;
