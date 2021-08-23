const CHANGE_VISIBLE ='CHANGE_VISIBLE'

const initialState = {
  isVisible: false
}

const appReducer = (state=initialState, action) => {
  switch (action.type) {
    case CHANGE_VISIBLE:
      return {
        ...state,
        isVisible: !state.isVisible
      }
    default:
      return state
  }
}
export const changeVisible = () => ({type: CHANGE_VISIBLE})

export default appReducer