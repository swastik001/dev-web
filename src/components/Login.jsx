import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

export const Login = () => {
  const [email, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

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

      dispatch(addUser(res.data.user));
      return navigate("/");
    } catch (e) {
      setError(e.response?.data?.message || "Login failed");
    }
  }

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId: email, password },
        {
          withCredentials: true,
        },
      );
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card w-96 bg-base-300 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Welcome, Devs!</h2>
          <div className="my-2">
            <fieldset className="fieldset">
              {!isLoginForm ? (
                <>
                  {" "}
                  <legend className="fieldset-legend ">First Name </legend>
                  <input
                    type="text"
                    className="input"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <legend className="fieldset-legend ">Last Name </legend>
                  <input
                    type="text"
                    className="input"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </>
              ) : (
                ""
              )}
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
                // type="text"
                className="input"
                value={password}
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </fieldset>
          </div>
          <div className="card-actions flex flex-col items-center justify-center  ">
            {error && <p className="text-red-500">{error}</p>}
            <button
              className="btn btn-primary btn-block w-40"
              onClick={isLoginForm ? handleLogin : handleSignUp}
            >
              {isLoginForm ? "Login" : "Sign Up"}
            </button>
            <p
              className="cursor-pointer py-5"
              onClick={() => setIsLoginForm(!isLoginForm)}
            >
              {isLoginForm
                ? "New User? Sign Up here"
                : "Existing User? Login here"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
