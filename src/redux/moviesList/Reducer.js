
let initialState = {
  moviesArr: [],
  movieType:'Popular'
}


function moviesReducer(state=initialState, action) {
 
  switch (action.type) {
    case 'FETCH_MOVIES':
      console.log(action.payload)
      return {
        ...state,
        moviesArr: action.payload
      }

      case 'UPDATE_HEADING':
        console.log('hello'+action.payload)
        return {
          ...state,
          movieType: action.payload
        }
      

    default: return state
    }
}

export default moviesReducer
