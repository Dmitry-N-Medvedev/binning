import {
  writable,
} from 'svelte/store';

const binningTypes = new Map();

function createBinningSettingsStore() {
  const {
    subscribe,
    update,
  } = writable(binningTypes);

  return {
    subscribe,
    addType: (binningSettings = null) => {
      update((currentState) => {
        if (binningSettings === null) {
          return currentState;
        }  

        binningSettings.id = crypto.randomUUID();

        currentState.set(binningSettings.id, binningSettings);

        return currentState;
      });
    },
  }
}

export const BinningTypes = createBinningSettingsStore();