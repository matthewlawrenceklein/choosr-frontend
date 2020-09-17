import React, { Component } from 'react';

class MovieItem extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <h6>{this.props.overview}</h6>
                <img src={`https://image.tmdb.org/t/p/w200/${this.props.poster}`} alt='poster'/>
            </div>
        );
    }
}

export default MovieItem;
