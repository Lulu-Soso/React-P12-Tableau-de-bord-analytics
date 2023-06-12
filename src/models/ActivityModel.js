class ActivityModel {
  constructor(activityData) {
    this.sessions = activityData.map(({ day, kilogram, calories }) => ({
      day,
      kilogram,
      calories
    }));
  }
}

export default ActivityModel;


/////////////////////////////////////////////////////////
// class ActivityModel {
//   constructor(activityData) {
//     this.sessions = activityData.map(session => ({
//       day: session.day,
//       kilogram: session.kilogram,
//       calories: session.calories
//     }));
//   }
// }
//
// export default ActivityModel;


