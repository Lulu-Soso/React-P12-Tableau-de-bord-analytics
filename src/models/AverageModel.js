class AverageModel {
  constructor(averageData) {
    this.userId = averageData.userId
    this.sessions = averageData.sessions.map(({ day, sessionLength }) => ({
      day,
      sessionLength
    }))
  }
}

export default AverageModel
