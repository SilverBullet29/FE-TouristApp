import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorImage from "@assets/image/error-page.webp";

const Error = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => {
      clearTimeout(redirectTimeout);
      clearInterval(countdownInterval);
    };
  }, [history]);

  const countdownInterval = setInterval(() => {
    setCountdown((prevCountdown) => prevCountdown - 1);
  }, 1000);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <img src={ErrorImage} alt="error-img" className="h-64 object-cover" />
      <p>Error - Redirecting to home page in {countdown} seconds...</p>
    </div>
  );
};

export default Error;
