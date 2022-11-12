import React from "react";
import { useEffect, useState } from "react";
import "./ToneGadget.css";

const ToneGadget = ({ gadget }) => {
  const { name } = gadget;

  const tableData = {
    ampMin: -90,
    ampMax: -20,
    ampStep: 5,
    freqMin: 0,
    freqMax: 20000,
    freqStep: 1000,
  };

  return (
    <div className="tone-gadget">
      {name}
      <FrequencyTable data={tableData} />
    </div>
  );
};

export default ToneGadget;

const FrequencyTable = ({ data }) => {
  const { ampMin, ampMax, ampStep, freqMin, freqMax, freqStep } = data;
  const [state, setState] = useState({});
  const [columnStyle, setColumnStyle] = useState();

  useEffect(() => {
    let frequencies = [];
    let amplitudes = [];
    for (let x = freqMin; x < freqMax; x += freqStep) {
      frequencies.push(x);
    }
    for (let y = ampMin; y < ampMax; y += ampStep) {
      amplitudes.push(y);
    }
    setState({ ...state, frequencies: frequencies, amplitudes: amplitudes });
    setColumnStyle({ gridTemplateColumns: "repeat(" + parseInt(frequencies.length + 1) + ", 1fr)" });
  }, []);

  useEffect(() => {
    console.log(state && state.amplitudes && state.amplitudes.length > 0);
  }, [state]);

  return (
    <div className="table-container">
      <div className="table-wrapper" style={columnStyle}>
        {state && state.frequencies && state.frequencies.length > 0 && (
          <>
            {state.amplitudes.map((a, ai) => {
              return state.frequencies.map((f, fi) => {
                if (fi !== 0) {
                  return <div className="table-item"></div>;
                } else {
                  return (
                    <>
                      <div>{a} </div>
                      <div className="table-item"></div>
                    </>
                  );
                }
              });
            })}
            {/* left corner div */}
            <div></div>
            {state.frequencies.map((f, fi) => {
              return <div>{f}</div>;
            })}
          </>
        )}
      </div>
    </div>
  );
};
