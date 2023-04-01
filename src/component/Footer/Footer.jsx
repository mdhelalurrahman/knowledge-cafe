import React from "react";

const Footer = () => {
  return (
    <div className="px-10 mt-8">
      <div>
        <h2 className="text-center text-3xl mb-3">1. Props vs state</h2>
        <div className="">
          <div className="">
            <p>
              Props are inputs sent to a component from a parent component. They
              are immutable and readable, which means that the component cannot
              change its properties by itself. Props are used to customize and
              configure the component and are typically used to pass data down
              the component tree.
            </p>
          </div>
          <div>
            <p>
              State is an object that represents the internal state of the
              component. It is used to store data that may change from time to
              time,
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl text-center mt-8 mb-3">
          2. How does useState work?
        </h2>
        <p>
          The useState function returns two values ​​- a state value and a set
          function. The state value is used when the component is rendered and
          the set function is used to update the state value.
        </p>
      </div>
      <div>
        <h2 className="text-3xl text-center mt-8 mb-3">
          3. Purpose of useEffect other than fetching data.
        </h2>
        <p>
          If passed as the second argument to the useEffect function, it is
          called when mounting and unmounting the component. It is basically a
          function that does something when the component is mounted and
          something when the component is unmounted. If a dependency array is
          passed as the first argument to the useEffect function, it will be
          called when that dependency changes.
        </p>
      </div>
      <div>
        <h2 className="text-3xl text-center mt-8 mb-3">
          4. How Does React work?
        </h2>
        <p>
          React is a JavaScript library used to create user interfaces. React
          obviously uses stateful components. Stateful components are components
          where the data is not persistent, but is instead called during
          rendering. A JSX expression is returned to create the stateful
          component. One more important feature that React has instead is the
          Virtual DOM. A virtual dom is a screen render tree that doesn't render
          the whole thing, but only the updated part.
        </p>
      </div>
    </div>
  );
};

export default Footer;
