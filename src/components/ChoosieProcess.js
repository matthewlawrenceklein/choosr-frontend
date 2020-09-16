import React, { Component } from 'react';
import * as firebase from "firebase/app";
import "firebase/firestore"
import { connect } from 'react-redux'
import NavBar from './NavBar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

class ChoosieProcess extends Component {

    state = {
        numChoosers : 0,
        address : '',
        movies : [],
        playlists : [],
        classicCinema : []
    }

    // TODO address, movies, + music have to be redux store items. move them there 

    getMovies = () => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=6103f090c7736779632b18a2a4abb0bb&language=en-US&page=1')
            .then(resp => resp.json())
            .then(resp => {
                for(let i = 0; i < 4; i++){
                    this.state.movies.push(resp.results[i])
                }
                console.log(this.state.movies)
            })    
    }

    getCinema = () => {
        const db = firebase.firestore();
        db.collection("classic-movies").get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                // console.log(doc.id, " => ", doc.data());
                this.state.classicCinema.push(doc.data())
            });
        });
        
    }

    getPlaylists = () => {
        fetch("https://api.spotify.com/v1/browse/featured-playlists?country=US&limit=8", {
            headers: {
            Accept: "application/json",
            Authorization: "Bearer BQCubWVj4YY1ZW7WIlqobKsFUNUpX7jFYaRwlHrNo1vDBncNSd3cOcrUzJYBrVIPq7ccFcUhSzpWHvv5wRH4I7VjJ5HE5rBrx8gPPyF--HPPlOkhIlc-Rnpl9JNcvkS_p9Jv0Ig7AiBmysI",
            "Content-Type": "application/json"
  }
})
        .then(resp => resp.json())
        .then(resp => {
            this.setState({
                playlists : resp.playlists.items
            })
        })
    }

    handleNum = (e) => {
        
        this.setState({
            numChoosers : parseInt(e.target.value)
        })
        console.log(this.state)
    }

    handleChange = address => {
        this.setState({ address });
      };
     
      handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => console.log('Success', latLng))
          .catch(error => console.error('Error', error));
      };
 
    render() {
        return (
            <div className='app'>
                < NavBar />
                { this.props.setCategory === 'movies' ? this.getMovies() : null }
                { this.props.setCategory === 'cinema' ? this.getCinema() : null }
                { this.props.setCategory === 'music' ? this.getPlaylists() : null }
                { this.props.setCategory === 'cuisine' ? 
                <div>
                    <PlacesAutocomplete
                    value={this.state.address}
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                    >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                        {...getInputProps({
                            placeholder: 'Search Places ...',
                            className: 'choosr-input',
                        })}
                        />
                        <div className="autocomplete-dropdown-container choosr-input">
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                            const className = suggestion.active
                            ? 'suggestion-item--active'
                            : 'suggestion-item';
                            // inline style for demonstration purpose
                            const style = suggestion.active
                            ? { backgroundColor: 'transparent', cursor: 'pointer' }
                            : { backgroundColor: 'transparent', cursor: 'pointer' };
                            return (
                            <div
                                {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                                })}
                            >
                                <span>{suggestion.description}</span>
                            </div>
                            );
                        })}
                        </div>
                    </div>
                    )}
                </PlacesAutocomplete>
              </div>
                
                : null  }
                    <h3 id="chooser-input-title"> How Many Choosers?</h3>
                    <input className='chooser-num-select' type='number' max='4' onChange={this.handleNum}></input>
                    <br></br>

                { this.state.numChoosers === 1 ?
                 <div>
                     <input className='chooser-input'type='text' placeholder='Enter Chooser 1 Name'></input> 
                    <br></br>
                     <Link to="/choosie/start">
                        <ArrowRightCircle className='nav-icon'/>
                    </Link>
                 </div>
                 : 
                 null }

                { this.state.numChoosers === 2 ?
                 <div>
                     <input className='chooser-input' type='text' placeholder='Enter Chooser 1 Name'></input> 
                     <br></br>
                     <input className='chooser-input' type='text' placeholder='Enter Chooser 2 Name'></input> 
                     <br></br>
                     <Link to="/choosie/start">
                        <ArrowRightCircle className='nav-icon'/>
                    </Link>
                 </div>
                 : 
                 null }

                { this.state.numChoosers === 3 ?
                 <div>
                     <input className='chooser-input' type='text' placeholder='Enter Chooser 1 Name'></input> 
                     <br></br>
                     <input className='chooser-input' type='text' placeholder='Enter Chooser 2 Name'></input> 
                     <br></br>
                     <input className='chooser-input' type='text' placeholder='Enter Chooser 3 Name'></input> 
                     <br></br>
                     <Link to="/choosie/start">
                        <ArrowRightCircle className='nav-icon'/>
                    </Link>
                 </div>
                 : 
                 null }

                { this.state.numChoosers === 4 ?
                 <div>
                     <input className='chooser-input' type='text' placeholder='Enter Chooser 1 Name'></input> 
                     <br></br>
                     <input className='chooser-input' type='text' placeholder='Enter Chooser 2 Name'></input> 
                     <br></br>
                     <input className='chooser-input' type='text' placeholder='Enter Chooser 3 Name'></input> 
                     <br></br>
                     <input className='chooser-input' type='text' placeholder='Enter Chooser 4 Name'></input> 
                     <br></br>
                     <Link to="/choosie/start">
                        <ArrowRightCircle className='nav-icon'/>
                    </Link>
                 </div>
                 : 
                 null }
                < Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userObj: state.userObj,
        loggedIn: state.loggedIn,
        setCategory: state.setCategory
    }
  }

export default connect(mapStateToProps, null)(ChoosieProcess)
