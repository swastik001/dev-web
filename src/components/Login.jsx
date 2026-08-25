import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

export const Login = () => {
  const [email, setEmailId] = useState("hulk@gmail.com");
  const [password, setPassword] = useState("Hulk@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function handleLogin() {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId: email,
          password,
        },
        {
          withCredentials: true, ///whenever making api calls , need to do this to avoid cors error
        },
      );
      console.log(res.data.user);
      dispatch(addUser(res.data.user));
      return navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <div className="flex justify-center my-10">
      <div className="card w-96 bg-base-300 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Welcome, Devs!</h2>
          <div className="my-2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend ">Email ID </legend>
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => {
                  setEmailId(e.target.value);
                }}
              />
              <legend className="fieldset-legend ">Password </legend>
              <input
                type="text"
                className="input"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary btn-block w-40"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
