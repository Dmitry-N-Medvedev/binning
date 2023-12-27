import {
  writable,
} from 'svelte/store';

function createBinningSettingsStore() {
  const {
    subscribe,
    update,
  } = writable(new Map());

  return {
    subscribe,
    /**
     * 
     * @param {object} binningSettings
     */
    newBinningSettings: (binningSettings = null) => {
      update((currentState) => {
        if (binningSettings === null) {
          return currentState;
        }

        binningSettings.id = crypto.randomUUID();

        currentState.set(binningSettings.id, binningSettings);

        return currentState;
      });
    },
    killBinningSettings: (id = null) => {
      update((currentState) => {
        currentState.delete(id);

        return currentState;
      });
    },
    updateBinningSettings: (id = null, property = null, value = null) => {
      update((currentState) => {
        if (id === null || property === null) {
          return currentState;
        }

        currentState.get(id)[property] = value;

        return currentState;
      });
    },
  }
}

export const Binnings = createBinningSettingsStore();