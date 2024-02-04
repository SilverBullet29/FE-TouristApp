import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@infra/queries";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Auth, Error, Home, Profile, TouristDetail } from "@components/pages";
import { PrivateRoute, PublicRoute } from "@routes";

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute component={Home} />} />
          <Route
            path="/profile"
            element={<PrivateRoute component={Profile} />}
          />
          <Route
            path="/tourist/:id"
            element={<PrivateRoute component={TouristDetail} />}
          />
          <Route path="/login" element={<PublicRoute component={Auth} />} />
          <Route path="/register" element={<PublicRoute component={Auth} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <ToastContainer />
    </QueryClientProvider>
  );
};

export default App;
