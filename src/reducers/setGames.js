const initialState = []
  
  export default function setGames(state = initialState, action) {
      switch (action.type) {
        case 'SET_GAMES':
          return action.setGames
  
        default:
          return state
      }
  }