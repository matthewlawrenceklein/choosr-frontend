const initialState = []
  
  export default function setCinema(state = initialState, action) {
      switch (action.type) {
        case 'SET_CINEMA':
          return action.setCinema
  
        default:
          return state
      }
  }