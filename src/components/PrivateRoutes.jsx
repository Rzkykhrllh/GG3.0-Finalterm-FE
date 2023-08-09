import axios from "axios";
import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

const PrivateRoutes = () => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");

    // Comento because we dont know what kind of auth we user
    // if (access_token) {
    //   axios
    //     .get('https://api.spotify.com/v1/me', {
    //       headers: {
    //         Accept: 'application/json, text/plain, */*',
    //         Authorization: `Bearer ${access_token}`,
    //       },
    //     })
    //     .then(response => {
    //       console.log(response);
    //       console.log('berhasil');
    //       setAuth(true);
    //       setLoading(false);
    //     })
    //     .catch(error => {
    //       console.error(error.response.data);
    //       setAuth(false);
    //       setLoading(false);
    //     });
    // } else {
    //   // No access_token, so set auth to false and stop loading
    //   setAuth(false);
    //   setLoading(false);
    // }
  }, []); // first render only

  if (loading) {
    // You can show a loading spinner or some other loading indicator here
    return <div>Loading...</div>;
  }

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
