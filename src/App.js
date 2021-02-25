import React, {useState} from "react";
import ActivityGeneration from './components/ActivityGeneration'
import './App.css';
import ShowActivities from './components/ShowActivities'

function App() {
  const [activities, setActivities] = useState([])

  const addActivities = (activity) => {
    setActivities([...activities, activity])
  }

  return (
    <>
      <ActivityGeneration onSave={addActivities}/>
      <ShowActivities activities={activities}/>
    </>
  );
}

export default App;
