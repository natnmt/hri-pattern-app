export const TOGGLE_PROPERTY_DIALOG_VISIBILITY = 'TOGGLE_PROPERTY_DIALOG_VISIBILITY'
export const togglePropertyDialogVisibility = (visibility) => ({
  type: TOGGLE_PROPERTY_DIALOG_VISIBILITY,
  payload: {
    visibility,
  },
})

export const TOGGLE_LOADING_VISIBILITY = 'TOGGLE_LOADING_VISIBILITY'
export const toggleLoadingVisibility = (visibility) => ({
  type: TOGGLE_LOADING_VISIBILITY,
  payload: {
    visibility,
  },
})

export const TOGGLE_DELETE_DIALOG_VISIBILITY = 'TOGGLE_DELETE_DIALOG_VISIBILITY'
export const toggleDeleteDialogVisibility = (visibility) => ({
  type: TOGGLE_DELETE_DIALOG_VISIBILITY,
  payload: {
    visibility,
  },
})
