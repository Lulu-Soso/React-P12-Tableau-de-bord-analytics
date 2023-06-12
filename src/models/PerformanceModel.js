class PerformanceModel {
  constructor(performanceData) {
    this.userId = performanceData.userId;
    this.performanceData = performanceData.data.map(item => ({
      value: item.value,
      kind: performanceData.kind[item.kind.toString()]
    }));
  }
}

export default PerformanceModel;
