import React, { Component } from 'react';
import { connect } from 'react-redux'
import MovieItem from './choiceItems/MovieItem'
import CinemaItem from './choiceItems/CinemaItem'
import CuisineItem from './choiceItems/CuisineItem'
import PlaylistItem from './choiceItems/PlaylistItem'
import GameItem from './choiceItems/GameItem'
import NavBar from './NavBar'
import Footer from './Footer'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Redirect } from "react-router-dom"
import ChoosieTurnMechanism from './ChoosieTurnMechanism';

class ChoosieStart extends Component {

    renderPlaylists = () => {
        return (
            <div className='App'>
                <ChoosieTurnMechanism />
                <Container>
                    <Row>
                        <PlaylistItem name={this.props.playlists[0].name} description={this.props.playlists[0].description} image={this.props.playlists[0].images[0].url}/>
                        <PlaylistItem name={this.props.playlists[1].name} description={this.props.playlists[1].description} image={this.props.playlists[1].images[0].url}/>
                        <PlaylistItem name={this.props.playlists[2].name} description={this.props.playlists[2].description} image={this.props.playlists[2].images[0].url}/>
                        <PlaylistItem name={this.props.playlists[3].name} description={this.props.playlists[3].description} image={this.props.playlists[3].images[0].url}/>
                    </Row>
                    <Row>
                        <PlaylistItem name={this.props.playlists[4].name} description={this.props.playlists[4].description} image={this.props.playlists[4].images[0].url}/>
                        <PlaylistItem name={this.props.playlists[5].name} description={this.props.playlists[5].description} image={this.props.playlists[5].images[0].url}/>
                        <PlaylistItem name={this.props.playlists[6].name} description={this.props.playlists[6].description} image={this.props.playlists[6].images[0].url}/>
                        <PlaylistItem name={this.props.playlists[7].name} description={this.props.playlists[7].description} image={this.props.playlists[7].images[0].url}/>
                    </Row>
                </Container>
            </div>
        )    
    }

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
            <div className='App'>
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

    renderGames = () => {
       
        const baseURL = 'http://media.steampowered.com/steamcommunity/public/images/apps/'
        return (
            <div className='App'>
                <ChoosieTurnMechanism />
                <Container>
                    <Row>
                        <GameItem name={this.props.games[0].name} image={`${baseURL}${this.props.games[0].appid}/${this.props.games[0].img_logo_url}.jpg`}/>     
                        <GameItem name={this.props.games[1].name} image={`${baseURL}${this.props.games[1].appid}/${this.props.games[1].img_logo_url}.jpg`}/>     
                    </Row>
                    <Row>
                        <GameItem name={this.props.games[2].name} image={`${baseURL}${this.props.games[2].appid}/${this.props.games[2].img_logo_url}.jpg`}/>     
                        <GameItem name={this.props.games[3].name} image={`${baseURL}${this.props.games[3].appid}/${this.props.games[3].img_logo_url}.jpg`}/>     
                    </Row>
                    <Row>
                        <GameItem name={this.props.games[4].name} image={`${baseURL}${this.props.games[4].appid}/${this.props.games[4].img_logo_url}.jpg`}/>     
                        <GameItem name={this.props.games[5].name} image={`${baseURL}${this.props.games[5].appid}/${this.props.games[5].img_logo_url}.jpg`}/>     
                    </Row> 
                    <Row>
                        <GameItem name={this.props.games[6].name} image={`${baseURL}${this.props.games[6].appid}/${this.props.games[6].img_logo_url}.jpg`}/>     
                        <GameItem name={this.props.games[7].name} image={`${baseURL}${this.props.games[7].appid}/${this.props.games[7].img_logo_url}.jpg`}/>     
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
                { this.props.setCategory === 'music' ? this.renderPlaylists() : null }
                { this.props.setCategory === 'steam' ? this.renderGames() : null }

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
        chosenCount : state.setChosenCount,
        games : state.setGames
    }
}

const mapDispatchToProps = {
  }

export default connect(mapStateToProps, mapDispatchToProps)(ChoosieStart)
