import React, { Component } from 'react';
import { connect } from 'react-redux'
import CinemaItem from './choiceItems/CinemaItem'
import MovieItem from './choiceItems/MovieItem'


class ChoosieFinish extends Component {

    componentDidMount = () => {
        
        switch (this.props.setCategory) {
            case 'cuisine':
                console.log('food')
                break;
            case 'movies':
                this.handleMovies()
                break; 
            case 'cinema':
                this.handleCinema()
                break;
            default:
                break;
        }

    }

    handleMovies = () => {
        console.log(this.props.choiceSet[0])
    }

    handleCinema = () => {
        console.log(this.props.choiceSet[0])
    }

    render() {

        return (
          <div className='App'>
              { this.props.setCategory === 'movies' ? <MovieItem poster={this.props.choiceSet[0].poster_path} title={this.props.choiceSet[0].title}/> : null }

              { this.props.setCategory === 'cinema' ? <CinemaItem photo={this.props.choiceSet[0].photo_url} 
                                                                  title={this.props.choiceSet[0].title}
                                                                  rating={this.props.choiceSet[0].imdb}
                                                                  /> 
                                                                  : null }
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
        playlists : state.setPlaylists, 
        latLon : state.setLatLon, 
        chooserNames : state.setChooserNames,
        chosenCount : state.setChosenCount,
        choiceSet : state.setChoiceSet 
    }
}

export default connect(mapStateToProps, null)(ChoosieFinish)
