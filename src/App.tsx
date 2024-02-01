import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeRoute from "@routes/HomeRoute";
import LoginRoute from "@routes/LoginRoute";
import PrivateRoute from "@routes/PrivateRoute";
import RegisterRoute from "@routes/RegisterRoute";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@infra/queries";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PublicRoute from "@routes/PublicRoute";

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute component={HomeRoute} />} />
          <Route
            path="/profile"
            element={<PrivateRoute component={HomeRoute} />}
          />
          <Route
            path="/login"
            element={<PublicRoute component={LoginRoute} />}
          />
          <Route
            path="/register"
            element={<PublicRoute component={RegisterRoute} />}
          />
        </Routes>
      </Router>
      <ToastContainer />
    </QueryClientProvider>
  );
};

export default App;
