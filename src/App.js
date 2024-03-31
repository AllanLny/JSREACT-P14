import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Page/Home/Home";
import ListUser from "./Components/Page/ListUser/ListUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="employee-list" element={<ListUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
