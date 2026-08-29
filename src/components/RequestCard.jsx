import axios from "axios";
import React, { use } from "react";
import { BASE_URL } from "../utils/constants";
import { removeRequest } from "../utils/requestSlice";
import { useDispatch } from "react-redux";

const RequestCard = ({ requests, requestID }) => {
  const dispatch = useDispatch();
  const { firstName, lastName, photoUrl, age, gender, about, skills } =
    requests;
  console.log(photoUrl);
  const reviewRequests = async (action) => {
    // console.log("called");
    try {
      const res = axios.post(
        BASE_URL + `/request/review/${action}/${requestID}`,
        {},
        { withCredentials: true },
      );

      dispatch(removeRequest(requestID));
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="card card-side bg-base-300 shadow-sm ">
      <figure>
        <img src={photoUrl} className="w-75 " alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{about}</p>
        <p>{age}</p>
        <p>{gender && gender}</p>
        <p>{skills?.length > 0 ? skills.join(", ") : ""}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-secondary"
            onClick={() => {
              reviewRequests("rejected");
            }}
          >
            Reject
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              reviewRequests("accepted");
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
