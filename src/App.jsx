import React, { useState } from "react";
import CounterApp from "./components/CounterApp";

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1 className="fw-bold">Estoy usando bootstrap</h1>
          <button className="btn btn-warning"> hola giles </button>
        </div>
      </div>
      <div className="row">
        {show && (
          <div className="col">
            <h3>Counter App </h3>
            <CounterApp />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
