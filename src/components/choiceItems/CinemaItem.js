import React, { Component } from 'react';

class CinemaItem extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3> {this.props.title}</h3>
                <h5> IMDb Rating : {this.props.rating}</h5>
                <img src={this.props.photo} alt='poster'/>
            </div>
        );
    }
}

export default CinemaItem;
