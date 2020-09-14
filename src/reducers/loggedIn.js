const initialState = false
  
  export default function loggedIn(state = initialState, action) {
      switch (action.type) {
        case 'LOGGED_IN':
          return action.loggedIn
  
        default:
          return state
      }
  }