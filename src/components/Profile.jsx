import React from "react";
import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";

const Profile = () => {
  const user = useSelector((s) => s.user);

  return (
    <div className="flex justify-center my-10">
      {user && (
        <div className="flex justify-center mx-10">
          <EditProfile user={user} />
        </div>
      )}
    </div>
  );
};

export default Profile;
