const initialState = []
  
  export default function setPlaylists(state = initialState, action) {
      switch (action.type) {
        case 'SET_PLAYLISTS':
          return action.setPlaylists
  
        default:
          return state
      }
  }