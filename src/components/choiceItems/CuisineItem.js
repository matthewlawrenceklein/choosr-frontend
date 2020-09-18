import React, { Component } from 'react';

class CuisineItem extends Component {

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
                <h3>{this.props.title}</h3>
                <img className='item-image' src={this.state.cancelled? process.env.PUBLIC_URL + '/cancel.png'   :this.props.image} alt='food'/>
            </div>
        );
    }
}

export default CuisineItem;
