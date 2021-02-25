import React from "react";
import "./ShowActivities.css";
import ShowActivity from "./ShowActivity";

export const ShowActivities = ({ activities }) => {
  return (
    <>
    <div className="activity-list">
    {activities.map((activity, index) => (
      <ShowActivity key={index} activity={activity} />
    ))}  
    </div>
  </>
  );
};

export default ShowActivities;
