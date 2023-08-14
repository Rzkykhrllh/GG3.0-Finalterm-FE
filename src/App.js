import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VideoDetail from "./pages/VideoDetail";
import PrivateRoutes from "./components/PrivateRoutes";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<PrivateRoutes />}></Route>

            <Route path="/" element={<Home />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
