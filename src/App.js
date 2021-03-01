import React, { useState } from "react";
import ActivityGeneration from "./components/ActivityGeneration";
import "./App.css";
import ShowActivities from "./components/ShowActivities";
import Popup from "./components/Popup"

function App() {
  const [activities, setActivities] = useState([]);
  const [isPopupClosed, setIsPopupClosed] = useState([false]);

  const addActivities = (activity) => {
    setActivities([...activities, activity]);
  };

  const openIsPopupClosed = ( index ) => {
    setIsPopupClosed(false);
  }

  const closeIsPopupClosed = () => {
    setIsPopupClosed(true);
  }

  const deleteActivity = () => {

  }

  return (
    <div className="body">
      <div className="box">
        <ActivityGeneration onSave={addActivities} />
      </div>
      <div className="box">
        <ShowActivities activities={activities} onClick={openIsPopupClosed}/>
      </div>
      <Popup closed={isPopupClosed} onClose={closeIsPopupClosed} onDelete={deleteActivity} />
      </div>
  );
}

export default App;
