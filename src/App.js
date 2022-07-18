import RestAPI from "./RestAPI";
import Update from "./Update";
import Create from "./Create";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RestAPI />}></Route>
      <Route path="/update/:id" element={<Update />}></Route>
      <Route path="/create/" element={<Create />}></Route>
    </Routes>
  );
}

export default App;
