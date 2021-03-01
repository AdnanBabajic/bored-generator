import React, { useEffect, useState } from "react";
import "./ActivityGeneration.css";
import getActivities from "./Api";
import { Button } from "./Button";

export const ActivityGeneration = ({ onSave }) => {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    getActivities().then((res) => {
      const activityResult = res.data;
      setActivity(activityResult);
    });
  }, []);

  const newActivity = () => {
    getActivities().then((res) => {
      const activityResult = res.data;
      setActivity(activityResult);
    });
  };

  const onSaveClick = () => {
    onSave({ activity });
  };

  return (
    <>
      <div className="activities">
        <p id='activity'>{activity.activity}</p>
        <Button text="Generate new" onClick={newActivity} />
        <Button text="Save" onClick={onSaveClick} />
      </div>
    </>
  );
};

export default ActivityGeneration;
