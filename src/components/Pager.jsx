import "../styles/Pager.scss";

import React from "react";
import { Link } from "react-router-dom";

const Pager = ({ pagesCount, currentPage }) =>
  pagesCount ? (
    <div className="Pager">
      {[...Array(pagesCount)].map((item, index) => (
        <Link
          to={`/${index + 1}`}
          key={index}
          className={`page${currentPage === index + 1 ? " selected" : ""}`}
        >
          {index + 1}
        </Link>
      ))}
    </div>
  ) : null;

export default Pager;
