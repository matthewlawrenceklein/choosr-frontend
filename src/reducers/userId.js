const initialState = 0

export default function userId(state = initialState, action) {
    switch (action.type) {
      case 'SET_USER':
        return action.userId

      default:
        return state
    }
}