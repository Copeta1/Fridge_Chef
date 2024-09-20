import "./App.css";
import Landing from "./component/Landing/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./component/register/Register";
import Login from "./component/Login/Login";
import Mainpage from "./component/Mainpage/Mainpage";
import PrivateRoute from "./widgets/PrivateRoute";
import Favorites from "./component/Favorites/Favorites";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo="/mainpage" element={<Landing />} />
          }
        />
        <Route
          path="/register"
          element={
            <PrivateRoute redirectTo="/mainpage" element={<Register />} />
          }
        />
        <Route
          path="/login"
          element={<PrivateRoute redirectTo="/mainpage" element={<Login />} />}
        />
        <Route
          path="/mainpage"
          element={<PrivateRoute element={<Mainpage />} />}
        />
        <Route
          path="/favorites"
          element={<PrivateRoute element={<Favorites />} />}
        />
        
      </Routes>
    </Router>
  );
}

export default App;
