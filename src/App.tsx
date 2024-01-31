import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeRoute from "@routes/HomeRoute";
import LoginRoute from "@routes/LoginRoute";
import PrivateRoute from "@routes/PrivateRoute";
import RegisterRoute from "@routes/RegisterRoute";
import { AuthProvider } from "@infra/storage/providers/AuthProvider";

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
