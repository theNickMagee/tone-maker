import React, { useState } from "react";
import ToneGadget from "../components/tone-gadget/ToneGadget";

const GadgetHome = () => {
  const [gadgets, setGadgets] = useState([]);

  const addGadget = () => {
    let newGadget = {
      name: "Gadget " + parseInt(parseInt(gadgets.length) + 1),
    };
    setGadgets([...gadgets, newGadget]);
  };

  return (
    <div>
      <div>
        {gadgets.map((g, i) => {
          return <ToneGadget key={g.name} gadget={g} />;
        })}
      </div>

      <div>
        <button onClick={addGadget}>Add Gadget</button>
      </div>
    </div>
  );
};

export default GadgetHome;
