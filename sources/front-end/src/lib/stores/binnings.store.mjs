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

        console.log(currentState);

        return currentState;
      });
    },
    killBinningSettings: (id = null) => {
      update((currentState) => {
        console.log('killBinningSettings', id);

        currentState.delete(id);

        return currentState;
      });
    },
  }
}

export const Binnings = createBinningSettingsStore();