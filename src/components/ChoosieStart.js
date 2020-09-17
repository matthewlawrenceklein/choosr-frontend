import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import MovieItem from './choiceItems/MovieItem'
import CinemaItem from './choiceItems/CinemaItem'
import CuisineItem from './choiceItems/CuisineItem'
import NavBar from './NavBar'
import Footer from './Footer'

class ChoosieStart extends Component {

    renderMovies = () => {
        return this.props.movies.map( movie => {
            return <MovieItem title={movie.title} 
                               overview={movie.overview}
                               poster={movie.poster_path}           
                    />
        })

    }

    renderCinema = () => {
        this.shuffle(this.props.cinema)

            return (
                <div className='App'>
                    < CinemaItem title={this.props.cinema[0].title} photo={this.props.cinema[0].photo_url} rating={this.props.cinema[0].imdb}/>
                    < CinemaItem title={this.props.cinema[1].title} photo={this.props.cinema[1].photo_url} rating={this.props.cinema[1].imdb}/>
                    < CinemaItem title={this.props.cinema[2].title} photo={this.props.cinema[2].photo_url} rating={this.props.cinema[2].imdb}/>
                    < CinemaItem title={this.props.cinema[3].title} photo={this.props.cinema[3].photo_url} rating={this.props.cinema[3].imdb}/>
                    < CinemaItem title={this.props.cinema[4].title} photo={this.props.cinema[4].photo_url} rating={this.props.cinema[4].imdb}/>
                    < CinemaItem title={this.props.cinema[5].title} photo={this.props.cinema[5].photo_url} rating={this.props.cinema[5].imdb}/>
                    < CinemaItem title={this.props.cinema[6].title} photo={this.props.cinema[6].photo_url} rating={this.props.cinema[6].imdb}/>
                    < CinemaItem title={this.props.cinema[7].title} photo={this.props.cinema[7].photo_url} rating={this.props.cinema[7].imdb}/>
                </div>
            )
    }

    renderCuisines = () => {
      
        const cuisines = [
             {
                name : 'Vietnamese', 
                id : 99,
                image : ''
            }, 
           {
               name : 'Vegetarian', 
               id:  308,
               image : ''
            },
            {
                name : 'Turkish',
                id : 142,
                image : ''
            }, 
            {
                name : 'Thai',
                id : 95,
                image : ''
            },
            {
                name : 'Tex-Mex',
                id: 150,
                image : '' 
            },
            {
                name : "Sushi",
                id :177, 
                image : ''
            },
            {
                name : 'Steak',
                id : 141, 
                image : ''
            },
            {
                name : 'Spanish',
                id : 89, 
                image : ''
            }
            // "Southern" : 471, 
            // "South American" : 972, 
            // "Seafood" : 83, 
            // "Sandwich" : 304, 
            // "Salad" : 998, 
            // "Ramen" : 320,
            // "Pub Food" : 983,
            // "Pizza" : 82
        ]
        let arrayOfCuisineTypes = this.shuffle(cuisines)
        return (
            <div>
                <CuisineItem title={arrayOfCuisineTypes[0].name}/>
                <CuisineItem title={arrayOfCuisineTypes[1].name}/>
                <CuisineItem title={arrayOfCuisineTypes[2].name}/>
                <CuisineItem title={arrayOfCuisineTypes[3].name}/>
            </div>
        )
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

    render() {
        return (
            <div>
                < NavBar />

                { this.props.setCategory === 'movies' ? this.renderMovies() : null }
                { this.props.setCategory === 'cinema' ? this.renderCinema() : null }
                { this.props.setCategory === 'cuisine' ? this.renderCuisines() : null }

                <Footer />
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
        chooserNames : state.setChooserNames 
    }
}

export default connect(mapStateToProps, null)(ChoosieStart)
