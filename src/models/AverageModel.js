class AverageModel {
  constructor(averageData) {
    this.sessions = averageData.map(({ day, sessionLength }) => ({
      day,
      sessionLength
    }))
  }
}

export default AverageModel
