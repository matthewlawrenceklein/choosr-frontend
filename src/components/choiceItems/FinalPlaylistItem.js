import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class FinalPlaylistItem extends Component {
    render() {
        console.log(this.props.url)
        return (
            <div className='container'>
                <div className='final-cuisine'>
                    <h2> You Chose A Playlist!</h2>
                    <h3> Check Out This Recommendation</h3>
                    <h1>{this.props.name}</h1>
                    <img className='final-image' src={this.props.image} alt='food' />
                    <a href={this.props.url}>
                        <Button> Check it out!</Button>
                    </a>
                </div>
            </div>
        );
    }
}

export default FinalPlaylistItem;
