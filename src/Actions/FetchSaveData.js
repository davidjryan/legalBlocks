import axios from 'axios';
import {
  FETCHING_SAVE_DATA,
  FETCHING_SAVE_DATA_SUCCESS,
  FETCHING_SAVE_DATA_FAIL
} from './../Utils/ActionTypes';

export default function FetchSaveData() {
  return dispatch => {

    dispatch({ type: FETCHING_SAVE_DATA })

    return axios.get(`api`)
      .then(res => {
        dispatch({ type: FETCHING_SAVE_DATA_SUCCESS, payload: res.data })
      })
      .catch( err => {
        dispatch({ type: FETCHING_SAVE_DATA_FAIL, payload: err.data })
      });
  }
}
