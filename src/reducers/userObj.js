const initialState = {
  email : undefined, 
  photoURL : undefined, 
  displayName : undefined
}

export default function userId(state = initialState, action) {
    switch (action.type) {
      case 'SET_USER':
        return action.userObj

      default:
        return state
    }
}