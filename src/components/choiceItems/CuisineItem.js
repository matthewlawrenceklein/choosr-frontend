import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setChosenCount } from '../../actions/index'

class CuisineItem extends Component {

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
                <h3>{this.props.title}</h3>
                <img className='item-image' src={this.state.cancelled? process.env.PUBLIC_URL + '/cancel.png'   :this.props.image} alt='food'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CuisineItem)
