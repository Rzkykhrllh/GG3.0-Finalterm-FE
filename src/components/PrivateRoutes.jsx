import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import useAuth from "../core/hooks/useAuth";
import Loading from "./Loading";

const PrivateRoutes = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const { auth } = useAuth();

  if (loading) {
    // You can show a loading spinner or some other loading indicator here
    return <Loading />;
  }

  return auth.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
