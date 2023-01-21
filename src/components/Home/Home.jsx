import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./home.scss";
import { AiFillCarryOut } from "react-icons/ai";
import { useState } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import { BsViewStacked } from "react-icons/bs";
import todoimage from "../../assets/Images/todo.webp"

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="home">
        <div className="task">
          <div 
            className="add-todo"
            onClick={()=>{
              navigate("/add-todo")
            }}
          >
            <div>Add Todo</div>
            <div><BsPlusCircleDotted /></div>
          </div>
          <div 
            className="view-todo"
            onClick={()=>{
              navigate("/view-todo")
            }}
          >
            <div>View Todo</div>
            <div><BsViewStacked /></div>
          </div>
        </div>

        <div className="todo-image">
          <img src={todoimage} alt="" />
        </div>

      </div>
    </>
  );
};

export default Home;
