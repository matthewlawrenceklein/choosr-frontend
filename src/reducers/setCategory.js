const initialState = ''
  
  export default function setCategory(state = initialState, action) {
      switch (action.type) {
        case 'SET_CATEGORY':
          return action.setCategory
  
        default:
          return state
      }
  }