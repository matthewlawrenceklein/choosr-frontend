import React, { Component } from 'react';

class MovieItem extends Component {

    state = {
        cancelled : false 
    }

    handleClick = () => {
        this.setState({
            cancelled: true 
        })    
    }

    render() {
        return (
            <div className='item-card' onClick={ this.handleClick }>
                <h3>{this.props.title}</h3>
                {/* <h6>{this.props.overview}</h6> */}
                <img className='item-movie-image' src={this.state.cancelled? process.env.PUBLIC_URL + '/cancel.png'   : `https://image.tmdb.org/t/p/w200/${this.props.poster}`} alt='poster'/>
            </div>
        );
    }
}

export default MovieItem;
