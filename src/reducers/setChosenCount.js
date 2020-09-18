const initialState = 0
  
  export default function setChosenCount(state = initialState, action) {
      switch (action.type) {
        case 'SET_CHOSEN_COUNT':
          return action.setChosenCount
  
        default:
          return state
      }
  }