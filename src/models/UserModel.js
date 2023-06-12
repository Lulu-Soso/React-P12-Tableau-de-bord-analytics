class UserModel {
  constructor(userProfile) {
    const {
      id,
      userInfos: { firstName, lastName, age },
      todayScore,
      keyData: { calorieCount, proteinCount, carbohydrateCount, lipidCount }
    } = userProfile;

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.todayScore = todayScore;
    this.calorieCount = calorieCount;
    this.proteinCount = proteinCount;
    this.carbohydrateCount = carbohydrateCount;
    this.lipidCount = lipidCount;
  }
}

export default UserModel;


// class UserModel {
//   constructor(userProfile) {
//     this.id = userProfile.id;
//     this.firstName = userProfile.userInfos.firstName;
//     this.lastName = userProfile.userInfos.lastName;
//     this.age = userProfile.userInfos.age;
//     this.todayScore = userProfile.todayScore;
//     this.calorieCount = userProfile.keyData.calorieCount;
//     this.proteinCount = userProfile.keyData.proteinCount;
//     this.carbohydrateCount = userProfile.keyData.carbohydrateCount;
//     this.lipidCount = userProfile.keyData.lipidCount;
//     //
//     // this.day = activity.session.day;
//   }
// }
//
// export default UserModel;

////////////////////////////////////////////////////////////////////////////////////////

// class UserModel {
//   id;
//   firstName;
//   lastName;
//   age;
//   todayScore;
//   calorieCount;
//   proteinCount;
//   carbohydrateCount;
//   lipidCount;
//
//   constructor(userProfile) {
//     this.id = userProfile.id;
//     this.firstName = userProfile.userInfos.firstName;
//     this.lastName = userProfile.userInfos.lastName;
//     this.age = userProfile.userInfos.age;
//     this.todayScore = userProfile.todayScore;
//     this.calorieCount = userProfile.keyData.calorieCount;
//     this.proteinCount = userProfile.keyData.proteinCount;
//     this.carbohydrateCount = userProfile.keyData.carbohydrateCount;
//     this.lipidCount = userProfile.keyData.lipidCount;
//   }
//
//   // Ajoutez des méthodes de formatage ou de manipulation des données si nécessaire
// }
//
// export default UserModel;
