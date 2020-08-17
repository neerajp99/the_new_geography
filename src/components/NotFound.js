import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = props => {
  return (
    <div className="notFound">
      <div className="container">
        <h2 className="404Head">404 Not Found</h2>
        <p> Nothing to see here </p>
        <Link to="/"><button className="404Button">Go Home</button></Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
