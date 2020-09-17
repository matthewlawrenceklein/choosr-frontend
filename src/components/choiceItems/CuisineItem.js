import React, { Component } from 'react';

class CuisineItem extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>{this.props.title}</h3>
            </div>
        );
    }
}

export default CuisineItem;
