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
import { setLatLon } from '../actions/index'
import { setChooserNames } from '../actions/index'
import { setChoiceSet } from '../actions/index'
import { setCuisines } from '../actions/index'
import { setChosenCount } from '../actions/index'

class ChoosieProcess extends Component {

    state = {
        numChoosers : 0,
        chooserNames : {}, 
        address : '',
    }
    
    componentDidMount(){
        this.props.setChosenCount(0)
        switch (this.props.setCategory) {
            case 'movies':
                this.getMovies()
                break;
            case 'cuisine': 
                this.getCuisines()
                break;
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
                this.props.setChoiceSet(movies)
            })    
    }

    getCinema = () => {
        let cinema = []
        let filteredCinema = []
        const db = firebase.firestore();
        db.collection("classic-movies").get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                cinema.push(doc.data())
            });
            this.shuffle(cinema)
            for(let i = 0; i < 8; i++){
                filteredCinema.push(cinema[i])
            }
            this.props.setCinema(filteredCinema)
            this.props.setChoiceSet(filteredCinema)
        });        
    }

    getCuisines = () => {
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
        for(let i = 0; i < 8; i++){
            arrayOfCuisineTypes.push(shuffled[i])
        }
        this.props.setChoiceSet(arrayOfCuisineTypes)
        this.props.setCuisines(arrayOfCuisineTypes)
        // TODO hook in dispatch and push arrayOfCuisineTypes to redux store choiceSet    
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
    }

    handleChange = address => {
        this.setState({ address });
      };
     
      handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
              this.props.setLatLon(latLng)
            })
          .catch(error => console.error('Error', error));
      };
    
    handleChangeName = (e) => {
        this.setState({
           chooserNames : {...this.state.chooserNames, [e.target.id] : e.target.value} 
        })
     }

    handleChooserNames = () => {
        let nameArray = Object.values(this.state.chooserNames).filter(name => name.length > 0)
        this.props.setChooserNames(nameArray)
    }  
 
    render() {
        return (
            <div className='App'>
                < NavBar />
                
                { this.props.setCategory === 'cuisine' ? 
                <div className='places-container'>
                    <div className='places-form'>
                        <PlacesAutocomplete
                        value={this.state.address}
                        onChange={this.handleChange}
                        onSelect={this.handleSelect}
                        >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div className=''>
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
                                ? { backgroundColor: '#F0F8FF', cursor: 'pointer' }
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
              </div>
                
                : null  }
                    <div className=''>
                        <h3 id="chooser-input-title"> How Many Choosers?</h3>
                        <input className='chooser-input-form' type='number' max='4' placeholder='0' onChange={this.handleNum}></input>
                        <br></br>
                    </div>

                { this.state.numChoosers === 1 ?
                 <div>
                     <input onChange={ this.handleChangeName } id='1' className='chooser-input'type='text' placeholder='Enter Chooser 1 Name'></input> 
                    <br></br>
                     <Link to="/choosie/start">
                        <ArrowRightCircle className='nav-icon' onClick={ this.handleChooserNames }/>
                    </Link>
                 </div>
                 : 
                 null }

                { this.state.numChoosers === 2 ?
                 <div>
                     <input onChange={ this.handleChangeName } id='1' className='chooser-input' type='text' placeholder='Enter Chooser 1 Name'></input> 
                     <br></br>
                     <input onChange={ this.handleChangeName } id='2' className='chooser-input' type='text' placeholder='Enter Chooser 2 Name'></input> 
                     <br></br>
                     <Link to="/choosie/start">
                        <ArrowRightCircle className='nav-icon' onClick={ this.handleChooserNames }/>
                    </Link>
                 </div>
                 : 
                 null }

                { this.state.numChoosers === 3 ?
                 <div>
                     <input onChange={ this.handleChangeName } id='1' className='chooser-input' type='text' placeholder='Enter Chooser 1 Name'></input> 
                     <br></br>
                     <input onChange={ this.handleChangeName } id='2' className='chooser-input' type='text' placeholder='Enter Chooser 2 Name'></input> 
                     <br></br>
                     <input onChange={ this.handleChangeName } id='3' className='chooser-input' type='text' placeholder='Enter Chooser 3 Name'></input> 
                     <br></br>
                     <Link to="/choosie/start">
                        <ArrowRightCircle className='nav-icon' onClick={ this.handleChooserNames }/>
                    </Link>
                 </div>
                 : 
                 null }

                { this.state.numChoosers === 4 ?
                 <div>
                     <input onChange={ this.handleChangeName } id='1' className='chooser-input' type='text' placeholder='Enter Chooser 1 Name'></input> 
                     <br></br>
                     <input onChange={ this.handleChangeName } id='2' className='chooser-input' type='text' placeholder='Enter Chooser 2 Name'></input> 
                     <br></br>
                     <input onChange={ this.handleChangeName } id='3' className='chooser-input' type='text' placeholder='Enter Chooser 3 Name'></input> 
                     <br></br>
                     <input onChange={ this.handleChangeName } id='4' className='chooser-input' type='text' placeholder='Enter Chooser 4 Name'></input> 
                     <br></br>
                     <Link to="/choosie/start">
                        <ArrowRightCircle className='nav-icon'onClick={ this.handleChooserNames } />
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
    setCuisines, 
    setPlaylists,
    setLatLon,
    setChooserNames,
    setChoiceSet,
    setChosenCount
  }

export default connect(mapStateToProps, mapDispatchToProps)(ChoosieProcess)
