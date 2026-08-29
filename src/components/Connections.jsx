import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import ConnectionsCard from "./ConnectionsCard";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((s) => s.connections);
  async function getConnections() {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res?.data?.connections));
    } catch (e) {
      console.log(e.message);
    }
  }
  useEffect(() => {
    getConnections();
  }, []);

  if (!connections) return;
  if (connections.length == 0) return <h2>No connections found</h2>;
  return (
    <div className="flex flex-col items-center my-10 mx-auto">
      <h2 className="text-bold text-3xl">Connection</h2>
      {connections?.map((each) => {
        // const { firstName, lastName, photoUrl, age, gender, about } = each;
        return (
          <div key={each._id} className="my-10 w-2/3">
            <ConnectionsCard connection={each} />
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
