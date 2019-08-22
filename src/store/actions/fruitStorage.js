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

export const fetchPalletsInit = () => {
  return {
    type: actionTypes.FETCH_PALLETS_INIT 
  }
}

export const fetchPallets = () => {
  return dispatch => {
    dispatch(fetchPalletsInit());
    axios.get('/fruit-storage/data.json')
      .then(response => {
        const fetchedPallets = [];
        for (let key in response.data) {
          fetchedPallets.push({
            ...response.data[key],
            id: key
          })
        }
        dispatch(fetchPalletsSuccess(fetchedPallets));
      })
  }
}

export const fetchPalletsSuccess = (pallets) => {
  return {
    type: actionTypes.FETCH_PALLETS_SUCCESS,
    pallets
  }
}

export const editItemFinished = () => {
  return {
    type: actionTypes.EDIT_ITEM_FINISHED
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

export const editPalletSuccess = (itemData, editedItemId) => {
  return dispatch => {
    axios.put(`/fruit-storage/data/${editedItemId}.json`, itemData)
      .then(response => {
        dispatch(editItemFinished());
        dispatch(fetchPallets());
      })
  }
}

export const deleteItemInit = () => {
  return {
    type: actionTypes.DELETE_ITEM_INIT
  }
}

export const deleteItem = (e) => {
  const itemId = e.target.id;
  return dispatch => {
    dispatch(deleteItemInit());
    axios.delete(`/fruit-storage/data/${itemId}.json`)
      .then(response => {
        dispatch(fetchPallets());
      })
  } 
}

export const editItemInit = (e) => {
  return {
    type: actionTypes.EDIT_ITEM_INIT,
    editedItemId: e.target.id
  }
}