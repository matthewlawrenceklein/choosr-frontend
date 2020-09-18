import React, { Component } from 'react';

class CinemaItem extends Component {
    state = {
        cancelled : false 
    }

    handleClick = () => {
        this.setState({
            cancelled: true 
        })    
    }

    render() {
        console.log(this.props)
        return (
            <div className='item-card' onClick={ this.handleClick }>
                <h5> {this.props.title}</h5>
                <p> IMDb Rating : {this.props.rating}</p>
                <img className='item-movie-image' src={this.state.cancelled? process.env.PUBLIC_URL + '/cancel.png'   : this.props.photo} alt='poster'/>
            </div>
        );
    }
}

export default CinemaItem;
