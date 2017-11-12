import React from "react";
import { Link } from "react-router-dom";

const Pager = ({ pagesCount }) =>
  pagesCount ? (
    <ul>
      {[...Array(pagesCount)].map((item, index) => (
        <li key={index}>
          <Link to={`/${index + 1}`}>{index + 1}</Link>
        </li>
      ))}
    </ul>
  ) : null;

export default Pager;
