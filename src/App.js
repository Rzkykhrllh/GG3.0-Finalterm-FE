import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VideoDetail from "./pages/VideoDetail";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/video/:id" element={<VideoDetail />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
