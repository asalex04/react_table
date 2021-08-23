import React from "react";
import cn from 'classnames';
import styles from "./Paginator.module.css";

const Paginator = ({itemsPerPage, totalItemsCount, currentPage, paginate}) => {
  const pageCount = Math.ceil(totalItemsCount / itemsPerPage);
  const pages = [...Array(pageCount)].map((e, i) => i + 1)

  return <div className={cn(styles.paginator)}>
    {pages.map((number) => {
      return <span className={cn({
        [styles.selectedPage]: currentPage === number
      }, styles.pageNumber)}
        key={number}>
          <a href={'!#'} onClick={() => paginate(number)}>
            {number}
          </a>
      </span>
    })}
  </div>
}
export default Paginator;