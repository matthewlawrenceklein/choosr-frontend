import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setChosenCount } from '../../actions/index'
import { setChoiceSet } from '../../actions/index'


class CuisineItem extends Component {

    state = {
        cancelled : false 
    }

    handleClick = () => {
        let newCount = this.props.chosenCount + 1
        this.props.setChosenCount(newCount)

        let newChoiceSet = this.props.choiceSet.filter(item => item.image !== this.props.image) 
        this.props.setChoiceSet(newChoiceSet)
    
        this.setState({
            cancelled : true 
        })        
    }

    render() {
        return (
            <div className='item-card' onClick={ this.state.cancelled ? null : this.handleClick }>
                <h3>{this.props.title}</h3>
                <img className='item-image' src={this.state.cancelled? process.env.PUBLIC_URL + '/cancel.png'   :this.props.image} alt='food'/>
            </div>
        );
    }
}

const mapDispatchToProps = {
    setChosenCount,
    setChoiceSet
}

const mapStateToProps = (state) => {
    return {
        chosenCount : state.setChosenCount,
        choiceSet : state.setChoiceSet
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CuisineItem)
