import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const addNewItemInit = () => {
  return {
    type: actionTypes.ADD_NEW_ITEM_INIT
  }
}

export const addNewItemFinished = () => {
  return {
    type: actionTypes.ADD_NEW_ITEM_FINISHED
  }
}

export const fetchPallets = () => {
  return dispatch => {
    axios.get('/fruit-storage/data.json')
      .then(response => {
        const fetchedPallets = [];
        for (let key in response.data) {
          fetchedPallets.push({
            ...response.data[key],
            id: key
          })
        }
        dispatch(fetchPalletsSuccess(fetchedPallets))
      })
  }
}

export const fetchPalletsSuccess = (pallets) => {
  return {
    type: actionTypes.FETCH_PALLETS_SUCCESS,
    pallets
  }
}

export const addNewPalletSuccess = (itemData) => {
  return dispatch => {
    axios.post('/fruit-storage/data.json', itemData)
      .then(response => {
        dispatch(addNewItemFinished());
        dispatch(fetchPallets())
      })
  }
}