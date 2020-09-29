import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setChosenCount } from '../../actions/index'
import { setChoiceSet } from '../../actions/index'

class GameItem extends Component {
    state = {
        cancelled : false,
        image : '' 
    }

    componentDidMount(){
        this.setState({
            image : this.props.image 
        })
    }

    handleClick = () => {
        let newCount = this.props.chosenCount + 1
        this.props.setChosenCount(newCount)

        let newChoiceSet = this.props.choiceSet.filter( item => item.title !== this.props.title) 
        this.props.setChoiceSet(newChoiceSet)
    
        this.setState({
            cancelled : true 
        })        
    }

    render() {
        return (
            <div className='item-card-game' onClick={ this.state.cancelled ? null : this.handleClick }>
                <h3 className='game-title'> {this.props.name}</h3>
                <img className='item-game-image' src={this.state.cancelled? process.env.PUBLIC_URL + '/cancel.png'   : this.state.image} alt='poster'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(GameItem)
