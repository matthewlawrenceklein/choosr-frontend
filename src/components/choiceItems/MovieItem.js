import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setChosenCount } from '../../actions/index'
import { setChoiceSet } from '../../actions/index'



class MovieItem extends Component {

    state = {
        cancelled : false 
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
            <div className='item-card' onClick={ this.state.cancelled ? null : this.handleClick }>
                <h3>{this.props.title}</h3>
                <img className='item-movie-image' src={this.state.cancelled? process.env.PUBLIC_URL + '/cancel.png'   : `https://image.tmdb.org/t/p/w200/${this.props.poster}`} alt='poster'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem)
