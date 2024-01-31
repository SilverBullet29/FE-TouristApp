import { AuthProvider } from "@infra/storage/providers/AuthProvider";
import Home from "@pages/Home";
import HomeRoute from "@routes/HomeRoute";
import LoginRoute from "@routes/LoginRoute";
import PrivateRoute from "@routes/PrivateRoute";
import RegisterRoute from "@routes/RegisterRoute";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<HomeRoute />} />
          </Route>
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/register" element={<RegisterRoute />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
