import axios from 'axios';
import * as actionTypes from './actionTypes';
import { appConstants } from '../constants/constants';

export function createSuccess(response){
  return {
      type: actionTypes.FETCH_INFORMATION_SUCCESS,
      payload: {
        response
      }
  }
}



export  function createError(error){
  return function(dispatch) {  
    dispatch({
      type: actionTypes.FETCH_INFORMATION_ERROR,
      payload: error
    });   
  };
}



 
export function  fetchWetherInformation(value) {
  return  function (dispatch) {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${value.city}&APPID=f7d1f075a9bdf182ca672cc9c675ada0`)
      .then(function (response) {
        // if api calling is return success then response is dispatch to reducer via createSuccess method
        dispatch(createSuccess(response.data))
      })
    .catch(error => { 
      // otherwise createError will handle error
      // dispatch(createSuccess(res))
       dispatch(createError(error)) 
     });
  };
}


