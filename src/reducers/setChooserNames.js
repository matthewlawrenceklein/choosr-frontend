const initialState = []
  
  export default function setChooserNames(state = initialState, action) {
      switch (action.type) {
        case 'SET_CHOOSER_NAMES':
          return action.setChooserNames
  
        default:
          return state
      }
  }