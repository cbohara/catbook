import * as types from './actionTypes';
import catApi from '../api/catApi';

export function loadCats(){
  return function(dispatch) {
    return catApi.getAllCats().then(cats => {
      dispatch(loadCatsSuccess(cats));
    }).catch(erro => {
      throw(error);
    });
  };
}

export function loadCatsSuccess(cats) {
  return {type: types.LOAD_CATS_SUCCESS, cats};
}
