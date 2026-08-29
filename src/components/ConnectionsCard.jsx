import React from "react";

const ConnectionsCard = ({ connection }) => {
  const { firstName, lastName, photoUrl, age, gender, about, skills } =
    connection;
  return (
    <div className="card card-side bg-base-300 shadow-sm h-60">
      <figure>
        <img src={photoUrl} className="w-75 " alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{about}</p>
        <p>{age + ", " + gender != undefined ? gender : ""}</p>
        <p>{skills?.length > 0 ? skills.join(", ") : ""}</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
          <button className="btn btn-primary">Watch</button>
        </div> */}
      </div>
    </div>
  );
};

export default ConnectionsCard;
