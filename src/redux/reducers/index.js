// Reducers know how to deal with this type of actions.
const reducer = (state = {}, action) => {
  switch (action.type) {
    // When action 'GET_NEWS' was dispatched property of state loading becomes equal to true
    // and the spinner is appears on the screen.
    case 'GET_NEWS':
      return {
        ...state,
        loading: true
      }
    // When action 'NEWS_RECEIVED' was dispatched
    // news state is filled with data
    // and property of state loading becomes equal to false
    // and the spinner is disappears on the screen.
    case 'NEWS_RECEIVED':
      return {
        ...state,
        news: action.json[0],
        loading: false
      }
    default:
      return state
  }
}

export default reducer
