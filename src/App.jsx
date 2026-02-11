import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  </BrowserRouter>;
}
export default App;
