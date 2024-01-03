class BinningStoreClass {
  state = $state(new Map());

  constructor() {
    console.log(`${this.constructor.name}.ctor`);
  }

  newBinning(binningSettings = null) {
    if (binningSettings === null) {
      return;
    }

    const newBinningSettings = structuredClone(binningSettings);

    newBinningSettings.id = crypto.randomUUID();
    newBinningSettings.isValid = newBinningSettings.binWidth > 0.0;

    const newState = structuredClone(this.state);

    newState.set(newBinningSettings.id, newBinningSettings);

    this.state = newState;
  }
  
  deleteBinning(binningId = null) {
    if (binningId === null) {
      return;
    }

    const newState = structuredClone(this.state);

    newState.delete(binningId);

    this.state = newState;
  }
  
  updateBinning(binningId = null, binningPropertyName = null, binningPropertyValue = null) {
    if (binningId === null) {
      return;
    }

    if (binningPropertyName === null) {
      return;
    }

    const newState = structuredClone(this.state);
    
    newState.get(binningId)[binningPropertyName] = binningPropertyValue;
    newState.get(binningId)['isValid'] = binningPropertyValue > 0.0;

    this.state = newState;
  }
}

export const BinningStore = new BinningStoreClass();
