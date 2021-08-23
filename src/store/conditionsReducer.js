const SELECT_COLUMN = 'SELECT_COLUMN'
const SELECT_CONDITION = 'SELECT_CONDITION'
const SET_VALUE = 'SET_VALUE'

const initialState = {
  column: 'Название',
  condition: 'равно',
  value: '',
  pageSize: 5,
  totalItemsCount: 0,
  currentPage: 1
}

const conditionReducer = (state=initialState, action) => {
  switch (action.type) {
    case SELECT_COLUMN:
      return {...state, column: action.column}
    case SELECT_CONDITION:
      return {...state, condition: action.condition}
    case SET_VALUE:
      return {...state, value: action.value}
    default:
      return state
  }
}

export const selectColumn = (column) => ({type: SELECT_COLUMN, column})
export const selectCondition = (condition) => ({type: SELECT_CONDITION, condition})
export const setValue = (value) => ({type: SET_VALUE, value})

export default conditionReducer