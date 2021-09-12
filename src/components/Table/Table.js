import React from 'react'
import {connect} from "react-redux";
import './table.css'
import useSortableData from "../Utils/sorting";

const filters = {
  'равно': (data, search) => data === search,
  'больше': (data, search) => data > search,
  'меньше': (data, search) => data < search,
  'содержит': (data, search) => data.includes(search),
}
const rename = {
  Название: 'name',
  Количество: 'quantity',
  Расстояние: 'distance'
}

const Table = (props) => {
  const filterStr = filters[props.condition]
  const {items, requestSort} = useSortableData(props.data)

  const filteredElements = items
    .filter(elem => (!props.value ? elem :
      filterStr(elem[rename[props.column]], `${props.value}`)))
    .map(elem => (
      <tr  key={elem.id}>
        <td>{elem.data}</td>
        <td>{elem.name}</td>
        <td>{elem.quantity}</td>
        <td>{elem.distance}</td>
      </tr>
    ))

  return(
    <>
      <table className='table'>
        <thead>
        <tr>
          <th>Дата</th>
          <th onClick={() => requestSort('name')}>Название</th>
          <th onClick={() => requestSort('quantity')}>Количество</th>
          <th onClick={() => requestSort('distance')}>Расстояние</th>
        </tr>
        </thead>
        <tbody>
        {filteredElements}
        </tbody>
      </table>
    </>

  )
}

const mapStateToProps = (state) => {
  return ({
    column: state.condition.column,
    condition: state.condition.condition,
    value: state.condition.value,
  })
}

export default connect(mapStateToProps)(Table)
