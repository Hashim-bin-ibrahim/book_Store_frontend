import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

export default function Header({ user }) {
  console.log("user", user);
  const navigate = useNavigate();

  return (
    <div className="header_wrapper">
      <div className="main_header_wrap">
        {user?.username ? (
          <div className="right-header">
            <img src="../../booksWagon_logo.png" alt="" width={"100px"} />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search by Title , Author , Publisher or ISBN ..."
            />
          </div>
        ) : (
          <div className="right-header">
          <img src="../../appavengers.png" alt="" width={"250px"} />
         
        </div>
        )}

        <div className="left_header">
          <div className="signup">
            {user?.username ? (
              <div className="userProfile">
                <img src="../../user_logo.svg" />
                <h3> My Account</h3>
                <FaRegHeart style={{ color: "red", fontSize: "30px" }} />
              </div>
            ) : (
              <h3 onClick={() => navigate("/login")}> Log In</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
