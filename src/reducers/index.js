import { combineReducers } from 'redux'
import userObj from './userObj'
import loggedIn from './loggedIn'
import setCategory from './setCategory'


export default combineReducers({
    userObj, 
    loggedIn,
    setCategory
   })
 