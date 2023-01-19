import React from "react";

const AboutUs = () => {
  return (
    <div className="jumbotron" style={{ margin: "auto", width: "25rem" }}>
      <h1 className="display-4">Hello!</h1>
      <p className="lead">
        HMTL, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MySQL
      </p>
      <hr className="my-4" />
      <p>Transition career to a full stack JavaScript / Typescript developer</p>
      <a className="btn btn-primary btn-lg" href="/services" role="button">
        Learn more
      </a>
    </div>
  );
};

export default AboutUs;
