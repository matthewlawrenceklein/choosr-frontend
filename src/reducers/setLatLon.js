const initialState = {}
  
  export default function setLatLon(state = initialState, action) {
      switch (action.type) {
        case 'SET_LATLON':
          return action.setLatLon
  
        default:
          return state
      }
  }