class ActivityModel {
  constructor(activityData) {
    this.userId = activityData.userId
    this.sessions = activityData.map(({ day, kilogram, calories }) => ({
      day,
      kilogram,
      calories
    }));
  }
}

export default ActivityModel;



