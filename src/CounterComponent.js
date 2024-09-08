import React, { useRef, useState, useEffect } from "react";

const CounterComponent = () => {
  const [contatore, setContatore] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const timerRef = useRef(null);

  const setCounter = (operator = null) => {
    if (operator === "+") {
      setContatore((prevContatore) => prevContatore + 1);
    } else if (operator === "-") {
      setContatore((prevContatore) => prevContatore - 1);
    } else {
      setContatore(0);
    }
  };

  useEffect(() => {
    if (isTimerActive) {
      timerRef.current = setInterval(() => {
        setContatore((prevContatore) => prevContatore + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isTimerActive]);

  const toggleTimer = () => {
    setIsTimerActive((prevIsTimerActive) => !prevIsTimerActive);
  };

  return (
    <>
      <div className="bg-white shadow rounded py-5 w-75  m-auto">
        <h3>Counter Component</h3>
        <h2>{contatore}</h2>

        <div className="d-flex justify-content-center gap-5 align-items-center p-3">
          <button className="btn btn-primary my-2 p-2" 
          onClick={() => setCounter("-")}
          
          >
            Decrement
          </button>
          <button className="btn btn-primary my-2 p-2" 
          onClick={() => setCounter("+")}>
            Increment
          </button>
        </div>
        
        <button className="btn btn-danger reset-button my-2" onClick={() => setCounter()}>
          Reset
        </button>

        <div className="d-flex justify-content-center gap-5 align-items-center p-3">
          <button className="btn btn-info my-2" id="timer" 
          onClick={toggleTimer}>
            {isTimerActive ? "Stop Timer" : "Start Timer"}
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterComponent;
