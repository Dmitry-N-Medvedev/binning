class JobStoreClass {
  state = $state(new Map());

  constructor() {
    console.log(`${this.constructor.name}.ctor`);
  }

  createNewJob() {
    const result = {
      id: self.crypto.randomUUID(),
      ct: Date.now(),
      recordsNum: 0,
      rps: 0,
      executionTime: 0,
    };

    const newState = structuredClone(this.state);

    newState.set(result.id, result);

    this.state = newState;
  }

  deleteJob(jobId = null) {
    if (jobId === null) {
      return;
    }

    const newState = structuredClone(this.state);

    newState.delete(jobId);

    this.state = newState;
  }
}

export const JobStore = new JobStoreClass();