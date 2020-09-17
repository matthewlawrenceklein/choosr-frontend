import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import MovieItem from './choiceItems/MovieItem'
import CinemaItem from './choiceItems/CinemaItem'
import NavBar from './NavBar'
import Footer from './Footer'

const cuisines = {
    "Vietnamese" : 99, 
    "Vegetarian" : 308, 
    "Turkish" : 142, 
    "Thai" : 95, 
    "Tex-Mex": 150, 
    "Sushi" : 177, 
    "Steak" : 141, 
    "Spanish" : 89, 
    "Southern" : 471, 
    "South American" : 972, 
    "Seafood" : 83, 
    "Sandwich" : 304, 
    "Salad" : 998, 
    "Ramen" : 320,
    "Pub Food" : 983,
    "Pizza" : 82
}


class ChoosieStart extends Component {

    componentDidMount(){
        switch (this.props.setCategory) {
            case 'movies':
                this.renderMovies()
                break;
            case 'cuisine': 
                break
            case 'music':
                // this.getPlaylists()
                break
            case 'cinema': 
                break 
            default:
                break;
        }
    }


    renderMovies = () => {
        return this.props.movies.map( movie => {
            return <MovieItem title={movie.title} 
                               overview={movie.overview}
                               poster={movie.poster_path}           
                    />
        })

    }

    renderCinema = () => {

        function shuffle(a) {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        }

        shuffle(this.props.cinema)

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

     


    render() {
        return (
            <div>
                < NavBar />
                
                { this.props.setCategory === 'movies' ? this.renderMovies() : null }
                { this.props.setCategory === 'cinema' ? this.renderCinema() : null }

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
