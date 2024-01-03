<script>
  import {
    BinningStore,
  } from '../../stores/binningStore.svelte.js';
  import HeaderWithButton from '$lib/components/header-with-button/HeaderWithButton.svelte';
  import BinningSettingsItem from '$lib/components/binning-settings/BinningSettingsItem.svelte';

  let binningsUsed = 0;
  let binningsTotal = $derived(BinningStore.state.size);
  let statString = $derived(`${binningsUsed}/${binningsTotal}`);

  /**
   * @param e {MouseEvent}
   */
  function createNewBinningSettings(e) {
    const newBinningSettings = {
      // FIXME: take from env
      binWidth: Math.random(),
    };

    // @ts-ignore
    BinningStore.newBinning(newBinningSettings);
  }
</script>

<style>
  .binning-settings-header {
    grid-area: binning-settings-header;
  }

  .binning-settings-list-items {
    grid-area: binning-settings-items;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    counter-reset: jli;
    overflow-y: auto;
    background-color: var(--theme-black);
  }
</style>

<div class="binning-settings-header">
  <HeaderWithButton
    title="settings"
    stat={statString}
    onButtonClick={createNewBinningSettings}
  />
</div>
<div class="binning-settings-list-items">
  {#each BinningStore.state.values() as binning(binning.id)}
    <BinningSettingsItem
      {binning}
    />
  {/each}
</div>