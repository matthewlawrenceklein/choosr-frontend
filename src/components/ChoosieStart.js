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


import ChoosieTurnMechanism from './ChoosieTurnMechanism';



class ChoosieStart extends Component {

    renderMovies = () => {
            return ( 
            <div className='App'>
                <ChoosieTurnMechanism />
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
                    <ChoosieTurnMechanism />
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
        return (
            <div>
                <ChoosieTurnMechanism />
                <Container>
                    <Row>
                        <CuisineItem title={this.props.cuisines[0].name} image={this.props.cuisines[0].image}/>
                        <CuisineItem title={this.props.cuisines[1].name} image={this.props.cuisines[1].image}/>
                        <CuisineItem title={this.props.cuisines[2].name} image={this.props.cuisines[2].image}/>
                        <CuisineItem title={this.props.cuisines[3].name} image={this.props.cuisines[3].image}/>
                    </Row>
                    <Row>
                        <CuisineItem title={this.props.cuisines[4].name} image={this.props.cuisines[4].image}/>
                        <CuisineItem title={this.props.cuisines[5].name} image={this.props.cuisines[5].image}/>
                        <CuisineItem title={this.props.cuisines[6].name} image={this.props.cuisines[6].image}/>
                        <CuisineItem title={this.props.cuisines[7].name} image={this.props.cuisines[7].image}/>
                    </Row>
                </Container>
            </div>
        )
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
        cuisines : state.setCuisines, 
        playlists : state.setPlaylists, 
        latLon : state.setLatLon, 
        chooserNames : state.setChooserNames,
        chosenCount : state.setChosenCount 
    }
}

const mapDispatchToProps = {
  }

export default connect(mapStateToProps, mapDispatchToProps)(ChoosieStart)
