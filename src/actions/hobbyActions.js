import * as types from './actionTypes';
import hobbyApi from '../api/HobbyApi';

export function loadHobbiesSuccess(hobbies) {
  return {type: types.LOAD_HOBBIES_SUCCESS, hobbies};
}

export function loadHobbies() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return hobbyApi.getAllHobbies().then(hobbies => {
      dispatch(loadHobbiesSuccess(hobbies));
    }).catch(error => {
      throw(error);
    });
  };
}
