import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [age, setAge] = useState(user?.age);
  const [about, setAbout] = useState(user?.about);
  const [skills, setSkills] = useState(user?.skills);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const gender = user?.gender;
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();

  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          about,
          age,
          gender,
          //   skills: skills?.split(","),
        },
        {
          withCredentials: true,
        },
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <div className="flex justify-center my-10 ">
        <div className="flex justify-center mx-10">
          <div className="card w-96 bg-base-300 shadow-sm">
            <div className="card-body">
              <h2 className="card-title justify-center">Edit Profile</h2>
              <div className="my-2">
                <fieldset className="fieldset">
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
                  <legend className="fieldset-legend ">Age </legend>
                  <input
                    type="text"
                    className="input"
                    value={age}
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                  <legend className="fieldset-legend ">About </legend>
                  <input
                    type="text"
                    className="input"
                    value={about}
                    onChange={(e) => {
                      setAbout(e.target.value);
                    }}
                  />
                  <legend className="fieldset-legend ">Skiils </legend>
                  <input
                    type="text"
                    className="input"
                    value={skills}
                    onChange={(e) => {
                      setSkills(e.target.value);
                    }}
                  />
                  <legend className="fieldset-legend ">
                    Profile Picture Url{" "}
                  </legend>
                  <input
                    type="text"
                    className="input"
                    value={photoUrl}
                    onChange={(e) => {
                      setPhotoUrl(e.target.value);
                    }}
                  />
                </fieldset>
              </div>
              <div className="card-actions flex flex-col items-center justify-center  ">
                {error && <p className="text-red-500">{error}</p>}
                <button
                  className="btn btn-primary btn-block w-40"
                  onClick={() => saveProfile()}
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, photoUrl, about, age, gender, skills }}
        />
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-info">
            <span>Profile Updated</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
