class UserModel {
  constructor(userProfile) {
    this.id = userProfile.id;
    this.userInfos = userProfile.map(({firstName, lastName, age}) => ({
      firstName,
      lastName,
      age
    }))
    this.todayScore = userProfile.todayScore;
    this.keyData = userProfile.map(({calorieCount, proteinCount, carbohydrateCount, lipidCount}) => ({
      calorieCount,
      proteinCount,
      carbohydrateCount,
      lipidCount
    }))
  }
}

export default UserModel;

