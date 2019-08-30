import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  loading: false,
  data: [],
  selectingPallets: false
}

const fetchSortingDataInit = (state, action) => {
  return updateObject(state, {loading: true})
}

const fetchSortingDataSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    data: action.fetchedData
  })
}

const addNewSortingInit = (state, action) => {
  return updateObject(state,{
    selectingPallets: true
  })
}

const addSortingFinished = (state, action) => {
  return updateObject(state, {selectingPallets: false})
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_SORTING_DATA_INIT: return fetchSortingDataInit(state, action)
    case actionTypes.FETCH_SORTING_DATA_SUCCESS: return fetchSortingDataSuccess(state, action)
    case actionTypes.ADD_NEW_SORTING_INIT: return addNewSortingInit(state, action)
    case actionTypes.ADD_SORTING_FINISHED: return addSortingFinished(state, action)
    default: return state;
  }
}

export default reducer;