import React, { Component } from 'react';
import { connect } from 'react-redux'
import MovieItem from './choiceItems/MovieItem'
import CinemaItem from './choiceItems/CinemaItem'
import CuisineItem from './choiceItems/CuisineItem'
import NavBar from './NavBar'
import Footer from './Footer'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Redirect } from "react-router-dom"

// TODO add all 8 chosen objects of any given category into a redux store. onClick, filter store to include
// only items not matching selected. 
// once setChosenCount === 7, do something wth the final redux store element from above array. 


class ChoosieStart extends Component {

    renderMovies = () => {
            return ( 
            <div className='App'>
                <Container>
                    <Row>
                        <MovieItem title={this.props.movies[0].title}overview={this.props.movies[0].overview} poster={this.props.movies[0].poster_path}/>
                        <MovieItem title={this.props.movies[1].title}overview={this.props.movies[1].overview} poster={this.props.movies[1].poster_path}/>
                        <MovieItem title={this.props.movies[2].title}overview={this.props.movies[2].overview} poster={this.props.movies[2].poster_path}/>
                        <MovieItem title={this.props.movies[3].title}overview={this.props.movies[3].overview} poster={this.props.movies[3].poster_path}/>
                    </Row>
                    <Row>
                        <MovieItem title={this.props.movies[4].title}overview={this.props.movies[4].overview} poster={this.props.movies[4].poster_path}/>
                        <MovieItem title={this.props.movies[5].title}overview={this.props.movies[5].overview} poster={this.props.movies[5].poster_path}/>
                        <MovieItem title={this.props.movies[6].title}overview={this.props.movies[6].overview} poster={this.props.movies[6].poster_path}/>
                        <MovieItem title={this.props.movies[7].title}overview={this.props.movies[7].overview} poster={this.props.movies[7].poster_path}/>
                    </Row>
                </Container>
            </div>
            )            
    }

    renderCinema = () => {
            return (
                <div className='App'>
                    <Container>
                        <Row>
                            < CinemaItem title={this.props.cinema[0].title} photo={this.props.cinema[0].photo_url} rating={this.props.cinema[0].imdb}/>
                            < CinemaItem title={this.props.cinema[1].title} photo={this.props.cinema[1].photo_url} rating={this.props.cinema[1].imdb}/>
                            < CinemaItem title={this.props.cinema[2].title} photo={this.props.cinema[2].photo_url} rating={this.props.cinema[2].imdb}/>
                            < CinemaItem title={this.props.cinema[3].title} photo={this.props.cinema[3].photo_url} rating={this.props.cinema[3].imdb}/>
                        </Row>
                        <Row>
                            < CinemaItem title={this.props.cinema[4].title} photo={this.props.cinema[4].photo_url} rating={this.props.cinema[4].imdb}/>
                            < CinemaItem title={this.props.cinema[5].title} photo={this.props.cinema[5].photo_url} rating={this.props.cinema[5].imdb}/>
                            < CinemaItem title={this.props.cinema[6].title} photo={this.props.cinema[6].photo_url} rating={this.props.cinema[6].imdb}/>
                            < CinemaItem title={this.props.cinema[7].title} photo={this.props.cinema[7].photo_url} rating={this.props.cinema[7].imdb}/>
                        </Row>
                    </Container>
                </div>
            )
    }

    renderCuisines = () => {
        let arrayOfCuisineTypes = []
        const cuisines = [
             {
                name : 'Vietnamese', 
                id : 99,
                image : process.env.PUBLIC_URL + '/vietnamese.jpg'
            }, 
           {
               name : 'Vegetarian', 
               id:  308,
               image : process.env.PUBLIC_URL + '/vegetarian.jpg'
            },
            {
                name : 'Turkish',
                id : 142,
                image : process.env.PUBLIC_URL + '/turkish.jpg'
            }, 
            {
                name : 'Thai',
                id : 95,
                image : process.env.PUBLIC_URL + '/thai.jpg'
            },
            {
                name : "Sushi",
                id :177, 
                image : process.env.PUBLIC_URL + '/sushi.jpg'
            },
            {
                name : 'Steak',
                id : 141, 
                image : process.env.PUBLIC_URL + '/steak.jpg'
            },
            {
                name : 'Spanish',
                id : 89, 
                image : process.env.PUBLIC_URL + '/spanish.jpg'
            },
            {
                name : 'Sandwich',
                id : 304, 
                image : process.env.PUBLIC_URL + '/sandwich.jpg'
            },
            // "Southern" : 471, 
            // "South American" : 972, 
            // "Seafood" : 83, 
            // "Salad" : 998, 
            // "Ramen" : 320,
            // "Pub Food" : 983,
            // "Pizza" : 82
        ]
        let shuffled = this.shuffle(cuisines)
        for(let i = 0; i < 9; i++){
            arrayOfCuisineTypes.push(shuffled[i])
        }
        // TODO hook in redux and push arrayOfCuisineTypes to redux store choiceSet
        return (
            <div>
                <Container>
                    <Row>
                        <CuisineItem title={arrayOfCuisineTypes[0].name} image={arrayOfCuisineTypes[0].image}/>
                        <CuisineItem title={arrayOfCuisineTypes[1].name} image={arrayOfCuisineTypes[1].image}/>
                        <CuisineItem title={arrayOfCuisineTypes[2].name} image={arrayOfCuisineTypes[2].image}/>
                        <CuisineItem title={arrayOfCuisineTypes[3].name} image={arrayOfCuisineTypes[3].image}/>
                    </Row>
                    <Row>
                        <CuisineItem title={arrayOfCuisineTypes[4].name} image={arrayOfCuisineTypes[4].image}/>
                        <CuisineItem title={arrayOfCuisineTypes[5].name} image={arrayOfCuisineTypes[5].image}/>
                        <CuisineItem title={arrayOfCuisineTypes[6].name} image={arrayOfCuisineTypes[6].image}/>
                        <CuisineItem title={arrayOfCuisineTypes[7].name} image={arrayOfCuisineTypes[7].image}/>
                    </Row>
                </Container>
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
                { this.props.chosenCount === 7 ? <Redirect push to="/choosie/finish" /> : null  }
                
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
        chooserNames : state.setChooserNames,
        chosenCount : state.setChosenCount 
    }
}

export default connect(mapStateToProps, null)(ChoosieStart)
