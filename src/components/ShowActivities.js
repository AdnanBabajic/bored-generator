import React from "react";
import "./ShowActivities.css";
import ShowActivity from "./ShowActivity";

export const ShowActivities = ({ activities, onClick }) => {
  return (
    <>
      <div className="activity-list">
        {activities.length > 0
          ? activities.map((activity, index) => (
              <ShowActivity key={index} activity={activity} onClick={onClick}/>
            ))
          : <p>No Activities To Show</p>}
      </div>
    </>
  );
};

export default ShowActivities;
