import "../styles/ErrorMessage.scss";

import React from "react";
import { Link } from "react-router-dom";

const ErrorMessage = ({ backToHome }) => (
  <div className="ErrorMessage">
    <h1>An error has occurred</h1>
    {backToHome ? <Link to="/">Go to back to the homepage</Link> : null}
  </div>
);

export default ErrorMessage;
