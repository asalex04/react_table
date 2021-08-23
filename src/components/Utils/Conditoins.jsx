import React from 'react'
import {connect} from 'react-redux'
import {selectColumn, selectCondition, setValue} from '../../store/conditionsReducer'

const Conditions = (props) => {
  const {column, condition, value} = props

  function handleChangeColumn(event) {
    props.selectColumn(event.target.value);
  }
  function handleChangeCondition(event) {
    props.selectCondition(event.target.value);
  }
  function onChangeValue(event) {
    props.setValue(event.target.value);
  }

  return <div>
    <select value={column} onChange={handleChangeColumn}>
      <option>Название</option>
      <option>Количество</option>
      <option>Расстояние</option>
    </select>
    <select value={condition} onChange={handleChangeCondition}>
      <option>равно</option>
      <option>содержит</option>
      <option>больше</option>
      <option>меньше</option>
    </select>
    <input placeholder={'Вставьте значение'} onChange={onChangeValue} value={value}/>
  </div>;
}

const mapStateToProps = (state) => {
  return ({
    column: state.condition.column,
    condition: state.condition.condition,
    value: state.condition.value
  })
}

export default connect(mapStateToProps,
  {selectColumn, selectCondition, setValue})(Conditions)


