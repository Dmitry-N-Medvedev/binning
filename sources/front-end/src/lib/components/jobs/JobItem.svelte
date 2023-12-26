<script>
  import {
    onMount,
  } from 'svelte';
  import JobStatistics from './JobStatistics.svelte';

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

  onMount(() => {
    selfId = self.crypto.randomUUID();
  });
</script>

<style>
  .job-list-item {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    /* grid-template-rows: max-content; */
    grid-template-areas:
      'job-statistics binning-settings'
      'job-statistics add-data'
    ;
    gap: 0.25rem;
    /* align-items: center; */
    /* min-height: 10rem; */

    background-color: var(--theme-black);

    padding: 0.25rem 0.5rem;
    
  }

  .job-statistics {
    grid-area: job-statistics;
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    height: 100%;
  }

  .add-data {
    grid-area: add-data;
  }

  .add-data > .file-input {
    display: none;
  }

  .add-data > label {
    display: block;
    padding: 1rem;
    max-width: 80%;
    text-align: center;
    cursor: pointer;

    color: var(--theme-black);
    background-color: var(--theme-green);
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
    height: 100%;
  }

  .isEnabled {
    /* background-color: var(--theme-none); */
  }
</style>

<div id="{jobItemId}" class="job-list-item" class:isEnabled>
  <div class="job-statistics">
    <JobStatistics
      ctValue={creationTimeToString(creationTime)}
      {recordsNum}
      {rps}
      {executionTime}
    />
  </div>
  <div class="add-data">
    <input
      id="{selfId}"
      type="file"
      value="add data"
      accept="text/csv"
      disabled={!isEnabled}
      class="file-input"
    />
    <label for="{selfId}">upload data</label>
  </div>
  <div class="binning-settings">binning settings</div>
</div>