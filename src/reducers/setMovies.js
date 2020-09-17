const initialState = []
  
  export default function setMovies(state = initialState, action) {
      switch (action.type) {
        case 'SET_MOVIES':
          return action.setMovies
  
        default:
          return state
      }
  }