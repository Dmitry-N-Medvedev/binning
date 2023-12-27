<script>
  import {
    onMount,
    onDestroy,
  } from 'svelte';
  import {
    Binnings,
  } from '$lib/stores/binnings.store.mjs';
  import HeaderWithButton from '$lib/components/header-with-button/HeaderWithButton.svelte';
  import BinningSettingsItem from '$lib/components/binning-settings/BinningSettingsItem.svelte';

  /**
   * @type {function}
   */
  let unsubscribeFromBinnings;
  let binnings = $state([]);
  let binningsUsed = 0;
  let binningsTotal = $derived(binnings.length);
  let statString = $derived(`${binningsUsed}/${binningsTotal}`);

  /**
   * @param e {MouseEvent}
   */
  function newBinningSettings(e) {
    const newBinning = {
      // FIXME: take from env
      binWidth: 0.5,
    };
    Binnings.newBinningSettings(newBinning);
  }
  
  onMount(() => {
    Binnings.newBinningSettings({
      binWidth: 0.5,
    });
    unsubscribeFromBinnings = Binnings.subscribe((newState) => {
      binnings.length = 0;

      newState.forEach((value, key) => {
        const binning = {
          id: value.id,
          binWidth: value.binWidth,
        };

        binnings.push(binning);
      });
    });
  });

  onDestroy(() => {
    unsubscribeFromBinnings();
  });
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
    onButtonClick={newBinningSettings}
  />
</div>
<div class="binning-settings-list-items">
  {#each binnings as binning(binning.id)}
    <BinningSettingsItem
      {binning}
    />
  {/each}
</div>