<script>
  import {
    onMount,
  } from 'svelte';
  import JobStatistics from './JobStatistics.svelte';
  import CrosshairIcon from '$lib/icons/crosshair.svelte';
  import UploadIcon from '$lib/icons/upload.svelte';
  import {
    Jobs,
  } from '$lib/stores/jobs.store.mjs';

  let {
    jobItemId = null,
    creationTime = null,
    recordsNum = 0,
    rps = 0,
    executionTime = 0,
    isEnabled = true,
  } = $props();
  
  /**
   * 
   * @param ct Number
   */
  function creationTimeToString(ct) {
    const t = new Date(ct);

    return `${t.getDay()}.${t.getMonth()}.${t.getFullYear()}:${t.getHours()}:${t.getMinutes()}`;
  }

  let selfId = $state();

  /**
   * 
   * @param e {MouseEvent}
   */
  function killSelf(e) {
    // @ts-ignore
    Jobs.killJob(jobItemId);
  }

  onMount(() => {
    selfId = self.crypto.randomUUID();
  });
</script>

<style>
  .job-list-item {
    display: grid;
    grid-template-columns: 4fr repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-template-areas:
      'job-statistics binning-settings kill'
      'job-statistics add-data kill'
    ;
    gap: 0.5rem;
    background-color: var(--theme-black);
    padding: 0.5rem;
    border: 0.5rem solid var(--theme-green);
  }

  .add-data {
    grid-area: add-data;
  }

  .add-data > .file-input {
    display: none;
  }

  .add-data > label {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    width: 100%;
    color: var(--theme-black);
    background-color: var(--theme-green);
  }

  .kill {
    grid-area: kill;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .kill-button {
    display: flex;
    flex: 1 0 100%;
    aspect-ratio: 1 / 1;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    font-variation-settings: "wght" 900, "opsz" 32;
    background-color: var(--theme-black);
    color: var(--theme-green);
    border-radius: 0.25rem;
    cursor: pointer;
  }

  .file-input:disabled + label {
    filter:opacity(0.5);
    pointer-events: none !important;
  }

  .binning-settings {
    grid-area: binning-settings;
  }

  .add-data,
  .binning-settings {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .isEnabled {
    /* background-color: var(--theme-none); */
  }
</style>

<div id="{jobItemId}" class="job-list-item" class:isEnabled>
    <JobStatistics
      ctValue={creationTimeToString(creationTime)}
      {recordsNum}
      {rps}
      {executionTime}
    />
  <div class="add-data">
    <input
      id="{selfId}"
      type="file"
      value="add data"
      accept="text/csv"
      disabled={!isEnabled}
      class="file-input"
    />
    <label for="{selfId}">
      <UploadIcon />
    </label>
  </div>
  <div class="binning-settings">binning settings</div>
  <div class="kill">
    <button class="kill-button" on:click|preventDefault|stopPropagation|trusted={killSelf}>
      <CrosshairIcon />
    </button>
  </div>
</div>