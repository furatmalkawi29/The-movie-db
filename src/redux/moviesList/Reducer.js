
let initialState = {
  moviesArr: [],
  genresList: [],
  movieType:'Popular'
}


function moviesReducer(state=initialState, action) {
 
  switch (action.type) {
    case 'FETCH_MOVIES':
      console.log('FETCH_MOVIES ', action.payload)
      return {
        ...state,
        moviesArr: action.payload
      }

      case 'UPDATE_HEADING':
        console.log('FETCH_MOVIES ', action.payload)
        return {
          ...state,
          movieType: action.payload
        }
      
        case 'FETCH_GENRES':
          console.log('FETCH_GENRES ',action.payload)
          return {
            ...state,
            genresList: action.payload
          }

    default: return state
    }
}

export default moviesReducer
