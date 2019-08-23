import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const fetchSortingDataInit = () => {
  return {
    type: actionTypes.FETCH_SORTING_DATA_INIT
  }
}

export const fetchSortingDataSuccess = (fetchedData) => {
  return {
    type: actionTypes.FETCH_SORTING_DATA_SUCCESS,
    fetchedData
  }
}

export const fetchSortingData = () => {
  return dispatch => {
    dispatch(fetchSortingDataInit());
    axios.get('/sorting/data.json')
      .then(response => {
        const fetchedData = [];
        for (let key in response.data) {
          fetchedData.push({
            ...response.data[key],
            id: key
          })
        }
        dispatch(fetchSortingDataSuccess(fetchedData))
      })
  }
}

export const onAddNewSortingInit = () => {
  return { 
    type: actionTypes.ADD_NEW_SORTING_INIT
  }
}

export const onAddSortingFinished = () => {
  return {
    type: actionTypes.ADD_SORTING_FINISHED
  }
}