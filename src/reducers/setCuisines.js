const initialState = []
  
  export default function setCuisines(state = initialState, action) {
      switch (action.type) {
        case 'SET_CUISINES':
          return action.setCuisines
  
        default:
          return state
      }
  }