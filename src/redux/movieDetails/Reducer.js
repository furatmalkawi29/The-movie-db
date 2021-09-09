
let initialState = {
currentMovieData:{},
isDetailsLoading:false,
}


function movieDetailsReducer(state=initialState, action) {
 
  switch (action.type) {
    case 'FETCH_MOVIE_FROM_ID':
      return {
        ...state,
        currentMovieData: {...state.currentMovieData, 
          ...action.payload}
      }
    case 'CHANGE_ISLOADING_FLAG':
        return {
          ...state,
          isDetailsLoading: !state.isDetailsLoading,
        }

    default: return state
    }
}

export default movieDetailsReducer
