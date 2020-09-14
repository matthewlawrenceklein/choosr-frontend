export const setUser = (userObj) => {
    return {
      type: 'SET_USER',
      userObj : userObj 
    }
}

export const loggedIn = (value) => {
    return {
      type: 'LOGGED_IN',
      loggedIn : value 
    }
}