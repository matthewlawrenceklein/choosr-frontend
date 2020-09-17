import { combineReducers } from 'redux'
import userObj from './userObj'
import loggedIn from './loggedIn'
import setCategory from './setCategory'
import setMovies from './setMovies'
import setCinema from './setCinema'
import setPlaylists from './setPlaylists'


export default combineReducers({
    userObj, 
    loggedIn,
    setCategory,
    setMovies,
    setCinema,
    setPlaylists
   })
 