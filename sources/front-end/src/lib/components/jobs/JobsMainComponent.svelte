<script>
  import JobItem from '$lib/components/jobs/JobItem.svelte';
  import {
    JobStore,
  } from '../../stores/jobsStore.svelte.js';
  import HeaderWithButton from '../header-with-button/HeaderWithButton.svelte';

  let jobsTotal = $derived(JobStore.state.size);
  let jobsRunning = 0;
  /**
   * @type {function}
   */
  let statString = $derived(`${jobsRunning}/${jobsTotal}`);

  /**
   * @param e {MouseEvent}
   */
  function createNewJob(e) {
    JobStore.createNewJob();
  }

  // onMount(() => {
  //   unsubscribeFromJobs = Jobs.subscribe((newState) => {
  //     jobItems.length = 0;
  //     newState.forEach((value, key) => {
  //       const item = {
  //         id: key,
  //         creationTime: value.ct,
  //         recordsNum: value.recordsNum,
  //         rps: value.rps,
  //         executionTime: value.executionTime,
  //       };

  //       jobItems.push(item);
  //     });
  //   });
  // });

  // onDestroy(() => {
  //   unsubscribeFromJobs();
  // });
</script>

<style>

  #job-list-header {
    grid-area: job-list-header;
  }

  #job-list-items {
    grid-area: job-list-items;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    counter-reset: jli;

    overflow-y: auto;

    background-color: var(--theme-black);
  }
</style>

<div id="job-list-header">
  <HeaderWithButton
    title="jobs"
    stat={statString}
    onButtonClick={createNewJob}
  />
</div>
<div id="job-list-items">
  {#each JobStore.state.values() as jobItem(jobItem.id)}
    <JobItem
      jobItemId={jobItem.id}
      creationTime={jobItem.creationTime}
      recordsNum={jobItem.recordsNum}
      rps={jobItem.rps}
      executionTime={jobItem.executionTime}
      isEnabled={true}
    />
  {/each}
</div>