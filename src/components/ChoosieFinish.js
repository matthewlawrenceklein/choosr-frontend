import React, { Component } from 'react';
import { connect } from 'react-redux'
import CinemaItem from './choiceItems/CinemaItem'
import MovieItem from './choiceItems/MovieItem'
import FinalCuisineItem from './choiceItems/FinalCuisineItem'

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

    handleCuisine = () => {
        const { lat, lng } = this.props.latLon
        const id = parseInt(this.props.choiceSet[0].id)
        // add distinction between delivery and pickup, adjust radius search accordingly w variable 

        fetch(`https://developers.zomato.com/api/v2.1/search?count=3&lat=${lat}&lon=${lng}&radius=10000&cuisines=${parseInt(id)}&sort=rating`, {
        headers: {
        Accept: "application/json",
        "User-Key": "7b934257aa35e3ba2609e8d3443b4466"
        }})
        .then(resp => resp.json())
        .then(resp => {
            const restaurants = this.shuffle(resp.restaurants)
            // console.log(restaurants[0].restaurant)
            const { name, location, featured_image, menu_url} = restaurants[0].restaurant
            console.log(name, location, featured_image, menu_url)
            this.setState({
                name : name, 
                location : location.address,
                // featured_image : featured_image, 
                menu : menu_url

            })
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
              { this.props.setCategory === 'cuisine' ? <FinalCuisineItem image={this.props.choiceSet[0].image}
                                                                         name={this.state.name}
                                                                         location={this.state.location}
                                                                         menu={this.state.menu}
              
              
              
              /> : null }



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
