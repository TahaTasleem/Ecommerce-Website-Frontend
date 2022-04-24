import React from "react";
import { Card } from "react-bootstrap";

const ThankYou = ({ history }) => {
  const clickHandler = () => {
    history.push("/");
  };
  return (
    <>
      <div class="jumbotron text-center" style={{ backgroundColor: "#ffcba4" }}>
        <h1 class="display-3">Thank You For Shopping!</h1>
        <p class="lead">
          <strong>Please check your email</strong> for further updates on your
          order.
        </p>
        <hr />
        <p>
          Having trouble? <a href="mtaha@gmail.com">Contact us</a>
        </p>
        <p class="lead">
          <a
            class="btn btn-primary btn-sm"
            href="/"
            role="button"
            onClick={clickHandler}
          >
            Continue to homepage
          </a>
        </p>
      </div>
    </>
  );
};

export default ThankYou;
