import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  pallets: [],
  addingNewItem: false,
  loading: false,
  editingInProgress: false,
  editedItemId: null,
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

const editItemInit = (state, action) => {
  return updateObject(state, {
    editingInProgress: true,
    editedItemId: action.editedItemId
  })
}

const editItemFinished = (state, action) => {
  return updateObject(state, {
    editingInProgress: false,
    editedItemId: null
  })
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_NEW_ITEM_INIT: return addNewItemInit(state, action)
    case actionTypes.ADD_NEW_ITEM_FINISHED: return addNewItemFinished(state, action)
    case actionTypes.FETCH_PALLETS_INIT: return fetchPalletsInit(state, action)
    case actionTypes.FETCH_PALLETS_SUCCESS: return fetchPalletsSuccess(state, action)
    case actionTypes.DELETE_ITEM_INIT: return deleteItemInit(state, action)
    case actionTypes.EDIT_ITEM_INIT: return editItemInit(state, action)
    case actionTypes.EDIT_ITEM_FINISHED: return editItemFinished(state, action)
    default: return state;
  }
}

export default reducer;