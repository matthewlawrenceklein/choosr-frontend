import React, { Component } from 'react';
import { connect } from 'react-redux'
import CinemaItem from './choiceItems/CinemaItem'
import CuisineItem from './choiceItems/CuisineItem';
import MovieItem from './choiceItems/MovieItem'
import FinalItem from './choiceItems/FinalItem'

class ChoosieFinish extends Component {

    componentDidMount = () => {
        
        switch (this.props.setCategory) {
            case 'cuisine':
                this.handleCuisine()
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
    handleCuisine = () => {
        const { lat, lng } = this.props.latLon
        const id = parseInt(this.props.choiceSet[0].id)
        console.log(lat, lng, id)        

        fetch(`https://developers.zomato.com/api/v2.1/search?count=1&lat=${lat}&lon=${lng}&radius=10000&cuisines=${parseInt(id)}&sort=rating`, {
        headers: {
        Accept: "application/json",
        "User-Key": "7b934257aa35e3ba2609e8d3443b4466"
        }})
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp.restaurants[0].restaurant)
            console.log(resp.restaurants[0].restaurant.name)
            console.log(resp.restaurants[0].restaurant.photos_url)
        })  
        
    }

    handleMovies = () => {
        console.log(this.props.choiceSet[0])
        // TODO generate streaming link
    }

    handleCinema = () => {
        console.log(this.props.choiceSet[0])
        // TODO generate streaming link 
    }

    render() {

        return (
        <div className='container'>
          <div className='App'>
              { this.props.setCategory === 'cuisine' ? <FinalItem image={this.props.choiceSet[0].image}/> : null }



              {/* { this.props.setCategory === 'cuisine' ? <CuisineItem title={this.props.choiceSet[0].name} image={this.props.choiceSet[0].image}/> : null } */}
              { this.props.setCategory === 'movies' ? <MovieItem poster={this.props.choiceSet[0].poster_path} title={this.props.choiceSet[0].title}/> : null }

              { this.props.setCategory === 'cinema' ? <CinemaItem photo={this.props.choiceSet[0].photo_url} 
                                                                  title={this.props.choiceSet[0].title}
                                                                  rating={this.props.choiceSet[0].imdb}
                                                                  /> 
                                                                  : null }
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
        playlists : state.setPlaylists, 
        latLon : state.setLatLon, 
        chooserNames : state.setChooserNames,
        chosenCount : state.setChosenCount,
        choiceSet : state.setChoiceSet 
    }
}

export default connect(mapStateToProps, null)(ChoosieFinish)
