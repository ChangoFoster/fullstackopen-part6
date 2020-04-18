const initialState = null

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

export const filterChange = (term) => {
  return {
    type: 'SET_FILTER',
    filter: term
  }
}

export default reducer
