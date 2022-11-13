import React, { useState } from "react";
import { useEffect } from "react";

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
    ></div>
  );
};

export default FreqTableItem;
