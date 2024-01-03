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

  updateJob(jobId = null, args = {}) {
    if (jobId === null) {
      return;
    }

    if (Object.getOwnPropertyNames(args).length === 0) {
      return;
    }

    const newState = structuredClone(this.state);

    Object.getOwnPropertyNames(args).forEach((propertyName) => {
      const propertyValue = args[propertyName];

      newState.get(jobId)[propertyName] = propertyValue;

      console.log(`added ${propertyName} = ${propertyValue} to ${jobId}`, newState.get(jobId));
    });

    this.state = newState;

    console.log(`${this.constructor.name}.updateJob(${jobId})`, args);
  }
}

export const JobStore = new JobStoreClass();