import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";
import ConnectionsCard from "./ConnectionsCard";
import RequestCard from "./RequestCard";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((s) => s.requests);
  const getRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      dispatch(addRequests(res?.data?.requests));
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    getRequests();
  }, []);
  if (!requests) return;
  if (requests.length == 0) return <h2>No requests found</h2>;
  return (
    <div className="flex flex-col items-center my-10 mx-auto">
      <h2 className="text-bold text-3xl">Requests</h2>
      {requests?.map((each) => {
        const { firstName, lastName, photoUrl, age, gender, about } =
          each.fromUserId;
        console.log(each);
        return (
          <div key={each._id} className="my-10 w-2/3">
            <RequestCard connection={each.fromUserId} />
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
