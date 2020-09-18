const initialState = []
  
  export default function setChoiceSet(state = initialState, action) {
      switch (action.type) {
        case 'SET_CHOICE_SET':
          return action.setChoiceSet
        default:
          return state
      }
  }