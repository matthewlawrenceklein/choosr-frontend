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

export const setCategory = (category) => {
  return {
    type: 'SET_CATEGORY',
    setCategory : category 
  }
}

export const setMovies = (movies) => {
  return {
    type: 'SET_MOVIES',
    setMovies : movies 
  }
}

export const setCinema = (cinema) => {
  return {
    type: 'SET_CINEMA',
    setCinema : cinema 
  }
}

export const setPlaylists = (playlists) => {
  return {
    type: 'SET_PLAYLISTS',
    setPlaylists : playlists 
  }
}