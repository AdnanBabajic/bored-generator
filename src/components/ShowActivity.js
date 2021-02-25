const ShowActivity = ({ activity }) => {
  const act = activity.activity

  console.log(activity)
  return (
    <div className={"show-activity"}>
        <h3>{act}</h3>
    </div>
  );
};

export default ShowActivity;
