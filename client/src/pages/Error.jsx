import { NavLink } from "react-router-dom";

//creating error page when any random route hit the application hits error page
//will be rendered

export const Error = () => {
  return (
    <>
      <section className="section-error">
        <div className="section-error-container">
          <h2 className="sec-error-heading">404</h2>
          <span>Sorry! Page not found</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            accusantium nostrum veritatis dignissimos numquam distinctio officia
            tempore cupiditate dolorum eum, eaque, accusamus optio officiis
            laboriosam nihil nulla, quam laborum possimus eligendi eos. Minus,
            tempore?
          </p>
          <div className="sec-error-button-wrapper">
            <NavLink className="erorPageBtn" to="/">
              Return to Home
            </NavLink>
            <NavLink className="erorPageBtn" to="/contact">
              Report problem
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
