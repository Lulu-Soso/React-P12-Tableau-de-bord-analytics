// class UserModel {
//   constructor(userData) {
//     const {
//       id,
//       userInfos: {firstName, lastName, age},
//       todayScore,
//       score,
//       keyData: {calorieCount, proteinCount, carbohydrateCount, lipidCount}
//     } = userData;
//
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.todayScore = todayScore;
//     this.score = score;
//     this.calorieCount = calorieCount;
//     this.proteinCount = proteinCount;
//     this.carbohydrateCount = carbohydrateCount;
//     this.lipidCount = lipidCount;
//   }
// }
//
// export default UserModel;

const dataFactory = () => {
  const createUserModel = (userData) => {
    const {
      id,
      userInfos: { firstName, lastName, age },
      todayScore,
      score,
      keyData: { calorieCount, proteinCount, carbohydrateCount, lipidCount }
    } = userData;

    return {
      id,
      firstName,
      lastName,
      age,
      todayScore,
      score,
      calorieCount,
      proteinCount,
      carbohydrateCount,
      lipidCount
    };
  };

  return createUserModel;
};

export default dataFactory();



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

