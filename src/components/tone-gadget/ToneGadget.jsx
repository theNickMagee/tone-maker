import React from "react";
import { useEffect, useState } from "react";
import FreqTableItem from "../freq-table/FreqTableItem";
import "./ToneGadget.css";

const ToneGadget = ({ gadget }) => {
  const { name } = gadget;

  const tableData = {
    ampMin: -90,
    ampMax: -20,
    ampStep: 5,
    freqMin: 0,
    freqMax: 1000,
    freqStep: 100,
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
  const [state, setState] = useState({
    itemsOn: [],
    frequencies: [],
    amplitudes: [],
  });
  const [columnStyle, setColumnStyle] = useState();
  //   const [itemsOn, setItemsOn] = useState({}); //array of items shaped as such: [{freq: f, amp: a}, ...]

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

  const toggleItemOn = (a, f) => {
    //if a and f are exact, delete all in column
    if (
      state.itemsOn.find((item, i) => {
        return item.amp === a && item.freq === f;
      })
    ) {
      setState({
        ...state,
        itemsOn: state.itemsOn.filter((item, i) => {
          if (item.freq != f) {
            return true;
          } else {
          }
          return item.freq != f;
        }),
      });
      return;
    }
    //if f equals but a is less negative, remove the ones with lower Dbs and add new one

    if (
      state.itemsOn.find((item, i) => {
        return item.amp <= a && item.freq === f;
      })
    ) {
      setState({
        ...state,
        itemsOn: [
          ...state.itemsOn.filter((item, i) => {
            return item.freq != f || (item.freq === f && item.amp >= a);
          }),
          { freq: f, amp: a },
        ],
      });
      return;
    }

    //if f is new, add it
    setState({ ...state, itemsOn: [...state.itemsOn, { freq: f, amp: a }] });
  };

  //   useEffect(() => {
  //     if (state && state.itemsOn){
  //         for (let i = 0; i < state.itemsOn.length; i++){

  //         }
  //     }
  //   }, [state]);

  useEffect(() => {});

  return (
    <div className="table-container">
      <div className="table-wrapper" style={columnStyle}>
        {state && state.frequencies && state.frequencies.length > 0 && (
          <>
            {state.amplitudes.map((a, ai) => {
              return state.frequencies.map((f, fi) => {
                if (fi !== 0) {
                  return <FreqTableItem key={fi + ai} amp={a} freq={f} toggle={toggleItemOn} itemsOn={state.itemsOn} />;
                } else {
                  return (
                    <>
                      <div>{a} </div>
                      <FreqTableItem amp={a} freq={f} key={fi + ai} toggle={toggleItemOn} itemsOn={state.itemsOn} />
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
