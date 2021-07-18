import React from "react";
import tape from "./tape_headphones.png";

//Components
import Header from "../../components/Header";

const About = () => {
  return (
    <div id="about">
      <Header title="About" />
      <section>
        <div className="content-wrapper">
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <img
          id="tape"
          src={tape}
          alt="Tape and headphones"
          title="Decorative image"
        />
      </section>
    </div>
  );
};

export default About;
