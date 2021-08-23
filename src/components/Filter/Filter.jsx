import React from 'react'

const Filter = (props) => {
  return (
      <button onClick={props.handleToggle} style={{color: 'green'}}>Фильтр</button>
    )
}
export default Filter
