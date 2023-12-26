<script>
  import {
    onMount,
    onDestroy,
  } from 'svelte';
  import {
    Binnings,
  } from '$lib/stores/binnings.store.mjs';
  import HeaderWithButton from '../header-with-button/HeaderWithButton.svelte';

  let {
    settingsTotal = 0,
    settingsUsed = 0,
  } = $props();
  let statString = $derived(`${settingsUsed}/${settingsTotal}`);
  /**
   * @type {function}
   */
  let unsubscribeFromBinnings;
  let binnings = $state([]);

  /**
   * @param e {MouseEvent}
   */
  function newBinningSettings(e) {
    const newBinning = {
      binWidth: 0,
    };
    Binnings.newBinningSettings(newBinning);
    console.log('newBinningSettings');
  }

  onMount(() => {
    Binnings.newBinningSettings({
      binWidth: 0,
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

      console.log(binnings);
    });
  });

  onDestroy(() => {
    unsubscribeFromBinnings();
  });
</script>

<style>
  .binning-settings-header {
    display: grid;
    grid-template-columns: 5fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'title add-new statistics'
    ;
    /* max-height: 8rem; */
    /* padding: 0.25rem 1rem; */
    background-color: var(--theme-blue);
  }

  .binning-settings-header > h2 {
    grid-area: title;
    display: flex;
    justify-content: start;
    align-items: center;
    color: var(--main-background-color);
    padding-left: 2rem;
  }

  .binning-settings-header > #add-new {
    grid-area: add-new;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
  }

  #add-new > button {
    display: flex;
    flex: 1 0 100%;
    aspect-ratio: 1 / 1;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    font-variation-settings: "wght" 900, "opsz" 32;
    background-color: var(--theme-black);
    color: var(--theme-white);
    border-radius: 0.25rem;
    cursor: pointer;
  }

  .binning-settings-header > #binning-settings-statistics {
    grid-area: statistics;
    display: flex;
    justify-content: center;
    align-items: center;
    font-feature-settings: "frac";
    font-variation-settings: "wght" 150, "opsz" 32;
    font-size: 3rem;
  }
</style>

<HeaderWithButton
  title="settings"
  stat={statString}
  onButtonClick={newBinningSettings}
/>
<div class="binning-settings-list-items">
  {#each binnings as binning(binning.id)}
    <div>{binning.binWidth}</div> 
  {/each}
</div>