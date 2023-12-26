import {
  writable,
} from 'svelte/store';

const jobs = new Map();

function createNewJob() {
  const result = {
    id: self.crypto.randomUUID(),
    ct: Date.now(),
    recordsNum: 0,
    rps: 0,
    executionTime: 0,
  };

  return result;
}

function createJobsStore() {
  const {
    subscribe,
    update,
  } = writable(jobs);

  return {
    subscribe,
    newJob: () => update((currentState) => {
      const newJob = createNewJob();
      currentState.set(newJob.id, newJob);

      return currentState;
    }),
    killJob: (jobId = null) => {
      update((currentState) => {
        currentState.delete(jobId);

        return currentState;
      });
    },
  }
}

export const Jobs = createJobsStore();