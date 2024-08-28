import "./App.css";
import Landing from "./component/Landing/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./component/register/Register";
import Login from "./component/Login/Login";
import Mainpage from "./component/Mainpage/Mainpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainpage" element={<Mainpage />} />
      </Routes>
    </Router>
    // <div>
    //   <Landing />
    // </div>
  );
}

export default App;
