import update from 'react-addons-update'
import { TOGGLE_PROPERTY_DIALOG_VISIBILITY, TOGGLE_LOADING_VISIBILITY } from '../actions/ToggleUIAction'

const initialState = {
  dialogVisibility: false,
  loadingVisibility: false,
}

export const toggle = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PROPERTY_DIALOG_VISIBILITY:
      return update(state, {
        dialogVisibility: {
          $set: action.payload.visibility,
        },
      })
    case TOGGLE_LOADING_VISIBILITY:
      return update(state, {
        loadingVisibility: {
          $set: action.payload.visibility,
        },
      })
    default:
      return state
  }
}
