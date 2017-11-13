import "../styles/Pager.scss";

import React from "react";
import { Link } from "react-router-dom";

const Pager = ({ pagesCount }) =>
  pagesCount ? (
    <div className="Pager">
      {[...Array(pagesCount)].map((item, index) => (
        <Link to={`/${index + 1}`} key={index} className="page">
          <span>{index + 1}</span>
        </Link>
      ))}
    </div>
  ) : null;

export default Pager;
