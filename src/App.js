import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux'

import Loader from "./components/Loader/Loader";
import ListOfConditions from './components/Utils/Conditoins'
import Table from "./components/Table/Table";
import Filter from './components/Filter/Filter'
import {changeVisible} from './store/appReducer'
import Paginator from "./components/Paginator/Paginator";

const url = 'http://localhost:3001'
const pageSize = 3


const App = (props) => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(pageSize)

  const handleToggle = () => {
    props.changeVisible()
  }

  useEffect(() => {getData()}, []);

  const getData = async () => {
    setIsLoading(true)
    const response = await axios.get(url)
    setData(response.data)
    setIsLoading(false)
  }

  const lastItemsIndex = currentPage * itemsPerPage
  const firstItemsIndex = lastItemsIndex - itemsPerPage
  const currentItems = data.slice(firstItemsIndex, lastItemsIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className='container'>
      {isLoading
        ? <Loader />
        : (<>
          <Filter handleToggle={handleToggle}/>
          {props.isVisible ? <ListOfConditions /> : null}
          <Table data={currentItems} />
          </>)
      }
      {data &&
        <Paginator
          itemsPerPage={itemsPerPage}
          totalItemsCount={data.length}
          currentPage={currentPage}
          paginate={paginate}
      />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isVisible: state.app.isVisible
  }
}

export default connect(mapStateToProps, {changeVisible})(App)
