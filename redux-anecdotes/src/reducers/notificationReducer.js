const initialState = {
  message: '',
  id: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'NEW':
      return { ...state, message: action.data }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

let timerid

export const newNotification = (notification, timeout) => {
  return async dispatch => {
    dispatch({
      type: 'NEW',
      data: notification
    })
    if(timerid) {
      clearTimeout(timerid)
    }
    const startTimer = () => {
      timerid = setTimeout(() => { dispatch(resetNotification()) }, timeout)
    }
    startTimer()
  }
}

export const resetNotification = () => {
  return async dispatch =>
    dispatch({
      type: 'RESET'
    })
}

export default reducer
