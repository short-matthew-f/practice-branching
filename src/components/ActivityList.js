const ActivityList = (props) => {
  const { activities } = props;

  return (
    <div className="activity-list">
      {activities.map((act) => {
        <h3>{act.name}</h3>;
      })}
    </div>
  );
};

export default ActivityList;
