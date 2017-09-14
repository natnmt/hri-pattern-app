export const TOGGLE_PROPERTY_DIALOG_VISIBILITY = 'TOGGLE_PROPERTY_DIALOG_VISIBILITY'
export const toggleDialogVisibility = (visibility) => ({
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
