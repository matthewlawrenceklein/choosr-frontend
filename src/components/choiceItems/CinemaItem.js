import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setChosenCount } from '../../actions/index'

class CinemaItem extends Component {
    state = {
        cancelled : false 
    }

    handleClick = () => {
        let newCount = this.props.chosenCount + 1
        this.props.setChosenCount(newCount)
    
        this.setState({
            cancelled : true 
        })        
    }

    render() {
        console.log(this.props)
        return (
            <div className='item-card' onClick={ this.state.cancelled ? null : this.handleClick }>
                <h5> {this.props.title}</h5>
                <p> IMDb Rating : {this.props.rating}</p>
                <img className='item-movie-image' src={this.state.cancelled? process.env.PUBLIC_URL + '/cancel.png'   : this.props.photo} alt='poster'/>
            </div>
        );
    }
}

const mapDispatchToProps = {
    setChosenCount
}

const mapStateToProps = (state) => {
    return {
        chosenCount : state.setChosenCount,
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CinemaItem)