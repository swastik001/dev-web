import React from "react";

const RequestCard = ({ connection }) => {
  const { firstName, lastName, photoUrl, age, gender, about, skills } =
    connection;
  return (
    <div className="card card-side bg-base-300 shadow-sm h-60">
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
          <button className="btn btn-secondary">Reject</button>
          <button className="btn btn-primary">Accept</button>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
