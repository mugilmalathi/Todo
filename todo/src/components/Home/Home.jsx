import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./home.scss";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/dashboard");
    }, 10000);
  }, []);

  return (
    <>
      <div class="context">
        <h1>Your TODO</h1>
      </div>

      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Home;
