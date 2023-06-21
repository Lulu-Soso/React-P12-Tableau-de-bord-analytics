const dataModelFactory = () => {
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

  const createActivityModel = (activityData) => {
    const { userId, sessions } = activityData;
    return {
      userId,
      sessions: sessions.map(({ day, kilogram, calories }) => ({
        day,
        kilogram,
        calories
      }))
    };
  };

  const createPerformanceModel = (performanceData) => {
    const { userId, data, kind } = performanceData;
    return {
      userId,
      performanceData: data.map(item => ({
        value: item.value,
        kind: kind[item.kind.toString()]
      }))
    };
  };

  const createAverageModel = (averageData) => {
    const { userId, sessions } = averageData;
    return {
      userId,
      sessions: sessions.map(({ day, sessionLength }) => ({
        day,
        sessionLength
      }))
    };
  };

  return {
    createUserModel,
    createActivityModel,
    createPerformanceModel,
    createAverageModel
  };
};

export default dataModelFactory();
