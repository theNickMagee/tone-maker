import React, { useState } from "react";
import { useEffect } from "react";
import * as Tone from "tone";
import { Frequency } from "react-frequency";

const FreqTableItem = ({ amp, freq, toggle, itemsOn }) => {
  const [on, setOn] = useState();

  const handleClick = () => {
    toggle(amp, freq);
  };

  useEffect(() => {
    if (
      itemsOn &&
      itemsOn.find((item) => {
        return item.amp <= amp && item.freq === freq;
      })
    ) {
      setOn(true);
    } else {
      setOn(false);
    }
  }, [itemsOn]);

  return (
    <div
      className="table-item hover-click"
      style={{
        backgroundColor: on ? "rgb(255, 0, 0)" : "#fff",
      }}
      onClick={handleClick}
      key={amp + freq}
    >
      {on && <Frequency hz={freq} type="center" gain={0.1} oscillator="sine" />}
    </div>
  );
};

export default FreqTableItem;
