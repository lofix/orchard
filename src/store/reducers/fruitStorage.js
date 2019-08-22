import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  pallets: [],
  addingNewItem: false,
  loading: false,
  palletInfo: {
    arrivalDate: '-',
    number: '',
    weight: '',
    variety: '',
    quality: '',
    sortingData: ''
  }
};

const addNewItemInit = (state, action) => {
  return updateObject(state, {addingNewItem: true})
} 

const addNewItemFinished = (state, action) => {
  return updateObject(state, {addingNewItem: false})
}

const fetchPalletsInit = (state, action) => {
  return updateObject(state, {loading: true})
}

const fetchPalletsSuccess = (state, action) => {
  return updateObject(state, {
    pallets: action.pallets,
    loading: false
  })
}

const deleteItemInit = (state, action) => {
  return updateObject(state, {loading: true})
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_NEW_ITEM_INIT: return addNewItemInit(state, action)
    case actionTypes.ADD_NEW_ITEM_FINISHED: return addNewItemFinished(state, action)
    case actionTypes.FETCH_PALLETS_INIT: return fetchPalletsInit(state, action)
    case actionTypes.FETCH_PALLETS_SUCCESS: return fetchPalletsSuccess(state, action)
    case actionTypes.DELETE_ITEM_INIT: return deleteItemInit(state, action)
    default: return state;
  }
}

export default reducer;