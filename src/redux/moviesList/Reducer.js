
let initialState = {
  moviesArr: [],
  genresList: [],
  movieType:'Popular'
}


function moviesReducer(state=initialState, action) {
 
  switch (action.type) {
    case 'FETCH_MOVIES':
      return {
        ...state,
        moviesArr: action.payload
      }

      case 'UPDATE_HEADING':
        return {
          ...state,
          movieType: action.payload
        }
      
        case 'FETCH_GENRES':
          return {
            ...state,
            genresList: action.payload
          }

    default: return state
    }
}

export default moviesReducer
