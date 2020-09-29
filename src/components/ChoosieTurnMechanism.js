import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setChoiceSet } from '../actions/index'



class ChoosieTurnMechanism extends Component {
    state = {
        currentShuffle : [],
        counter : 15, 
    }

    shuffle = (a) => {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    countdown = () => {
        this.interval = setInterval(() => {
            this.setState({
                counter : this.state.counter - 1
            })
        }, 1000)
     }
    
    componentDidMount(){
        const shuffledChoosers = this.shuffle(this.props.chooserNames)
        this.setState({
            currentShuffle : shuffledChoosers,
            counter : 15,
        })
        this.countdown()
    }

    componentDidUpdate(prevProps, prevState){
        // if (this.state.counter === 0){
        //     // TODO grab choiceset, generate random number within length of set, remove item at generated number
        // const randomNum = Math.floor(Math.random() * Math.floor(this.props.choiceSet.length));
        // }
        if (prevProps.chosenCount !== this.props.chosenCount || this.state.counter === 0){
            clearInterval(this.interval)
            this.componentDidMount()
        } 
    }

    


    render() {
        return (
            <div className='container'>
                <div className='turn-counter'>
                    <h6>  { this.state.currentShuffle[1]}  {this.state.currentShuffle[2]}  {this.state.currentShuffle[3]} </h6>
                    <h2>It's your turn {this.state.currentShuffle[0]}, eliminate something!</h2>
                    <h3> You have { this.state.counter } seconds to choose!</h3>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userObj: state.userObj,
        setCategory: state.setCategory,
        movies : state.setMovies, 
        cinema : state.setCinema, 
        cuisines : state.setCuisines, 
        playlists : state.setPlaylists, 
        latLon : state.setLatLon, 
        chooserNames : state.setChooserNames,
        chosenCount : state.setChosenCount, 
        choiceSet : state.setChoiceSet
    }
}

const mapDispatchToProps = {
    setChoiceSet,
  }

export default connect(mapStateToProps, mapDispatchToProps)(ChoosieTurnMechanism)

