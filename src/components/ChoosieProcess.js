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
import { setMovies } from '../actions/index'
import { setCinema } from '../actions/index'
import { setPlaylists } from '../actions/index'

class ChoosieProcess extends Component {

    state = {
        numChoosers : 0,
        address : '',
        playlists : [],
    }

    componentDidMount(){
        switch (this.props.setCategory) {
            case 'movies':
                this.getMovies()
                break;
            case 'cuisine': 
                break
            case 'music':
                // this.getPlaylists()
                break
            case 'cinema': 
                this.getCinema()
                break 
            default:
                break;
        }
    }

    getMovies = () => {
        let movies = []
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=6103f090c7736779632b18a2a4abb0bb&language=en-US&page=1')
            .then(resp => resp.json())
            .then(resp => {
                for(let i = 0; i < 8; i++){
                    movies.push(resp.results[i])
                }
                this.props.setMovies(movies)
            })    
    }

    getCinema = () => {
        let cinema = []
        const db = firebase.firestore();
        db.collection("classic-movies").get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                cinema.push(doc.data())
            });
            this.props.setCinema(cinema)
        });        
    }

    getPlaylists = () => {
        let accessToken = "BQAJLJUiZeWolz5W_c3M_IQ88xI4H0VI068DyGSOySqTE4M5ghz_mRjL8FZK1f3x-SIPVQlVUq5kRIlTkk_GLhewO3WN9suywZ48plJrSgRSkxm3QoWZzxOQe-NZBvQbMR1XmXrei31V4sY"

        fetch("https://accounts.spotify.com/api/token", {
            body: "grant_type=refresh_token&refresh_token=NgAagA...NUm_SHo",
            headers: {
                Authorization: "Basic ZjM4Zj...Y0MzE=",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST"
        })
        .then(resp => {
            console.log(resp)
        })



        fetch("https://api.spotify.com/v1/browse/featured-playlists?country=United%20States&limit=8", {
         headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
        })
        .then(resp => resp.json())
        .then(resp => {
            this.props.setPlaylists(resp.playlists.items)
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
                            placeholder: 'Your Address...',
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

  const mapDispatchToProps = {
    setMovies,
    setCinema,
    setPlaylists
  }

export default connect(mapStateToProps, mapDispatchToProps)(ChoosieProcess)
