import React from "react";
import "./dashboard.css"


const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div id="paginate">
        {pageNumbers.map(number => (
          <div key={number} className="number1">
            <span className="number" onClick={()=>paginate(number)} >{number}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
