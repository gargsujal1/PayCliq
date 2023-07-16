import { Button } from "antd";
import "./stylesheets/text-elements.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/custom-components.css";
import "./stylesheets/allignments.css";
import "./stylesheets/theme.css";
import "./stylesheets/layout.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoute from "./components/PublicRoute";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";
import Transactions from "./pages/Transactions";
import Requests from "./pages/Requests";
import Users from "./pages/Users";
function App() {
  const { loading } = useSelector((state) => state.loaders);
  return (
    <div>
     {loading && <Loader />}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<PublicRoute>
                <Login />
              </PublicRoute>} />
          <Route path="/register" element={<PublicRoute>
                <Register />
              </PublicRoute>} />
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Home />
            </ProtectedRoutes>
            }
          />
          <Route
            path="/transactions"
            element={
              <ProtectedRoutes>
                <Transactions />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/requests"
            element={
              <ProtectedRoutes>
                <Requests />
              </ProtectedRoutes>
            }
          />

          <Route
            path="/users"
            element={
              <ProtectedRoutes>
                <Users />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
