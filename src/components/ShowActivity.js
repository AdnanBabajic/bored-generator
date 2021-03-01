import './ShowActivity.css'

const ShowActivity = ({ key, activity, onClick }) => {
  const callPopup = () => {
    onClick(key);
  }
  return (
    <div className={"show-activity"} onClick={callPopup}>
        <p>{activity.activity.activity}</p>
    </div>
  );
};

export default ShowActivity;
