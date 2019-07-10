import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE ={
  res:{},
};

// flow from action will come here and find action type then perform opn as required

const userReducer = (state = INITIAL_STATE, action={}) =>{
  switch (action.type) {
    case actionTypes.FETCH_INFORMATION_ERROR:
      return {
        res: action.payload.response,
      };

    case actionTypes.FETCH_INFORMATION_SUCCESS:
      return {
        res: action.payload.response,
      };
    default:
      return state
  }
}

export default userReducer;