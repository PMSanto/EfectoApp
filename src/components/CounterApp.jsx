import React, { useState, useEffect } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  //hacer algo cuando se monta el componente
  useEffect(() => {
    //es el efeccto cuando se monta algo o accion
    console.log("el componente se monto");
    //cuando se desmonta el componente
    return () => {
      //es el efecto o acciones cuando se desmonta el componente
      console.warn("se desmonto el componente");
    };
  }, []);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <div>
      <h4>Contador: {counter}</h4>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-warning"
      >
        +1
      </button>
    </div>
  );
};

export default CounterApp;
