import "./App.css";
import Header from "./components/header/Header";
import "./styles/vars.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GadgetHome from "./pages/GadgetHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/gadgets" element={<GadgetHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

