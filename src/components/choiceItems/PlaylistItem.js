import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setChosenCount } from '../../actions/index'
import { setChoiceSet } from '../../actions/index'

class PlaylistItem extends Component {

    state = {
        cancelled : false 
    }

    handleClick = () => {
        let newCount = this.props.chosenCount + 1
        this.props.setChosenCount(newCount)
        let newChoiceSet = this.props.choiceSet.filter( item => item.name !== this.props.name) 
        this.props.setChoiceSet(newChoiceSet)
    
        this.setState({
            cancelled : true 
        })        
    }
    render() {
        return (
            <div className='item-card' onClick={ this.state.cancelled ? null : this.handleClick }>
                <h4>{this.props.name}</h4>
                {/* <p> {this.props.description}</p> */}
                <img src={ this.state.cancelled? process.env.PUBLIC_URL + '/cancel.png' :this.props.image } className='item-image' alt='album cover'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistItem)
