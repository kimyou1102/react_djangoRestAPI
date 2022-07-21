import RestAPI from "./RestAPI";
import Update from "./Update";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RestAPI />}></Route>
      <Route path="/update/:id" element={<Update />}></Route>
    </Routes>
  );
}

export default App;
