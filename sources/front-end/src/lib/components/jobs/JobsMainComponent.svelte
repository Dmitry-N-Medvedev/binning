<script>
  import {
    onMount,
    onDestroy,
  } from 'svelte';
  import JobItem from '$lib/components/jobs/JobItem.svelte';
  import JobsListHeader from '$lib/components/jobs/JobsListHeader.svelte';
  import { Jobs } from '$lib/stores/jobs.store.mjs';

  /**
   * @type Array<object>
   */
  let jobItems = $state([]);
  let jobsTotal = $derived(jobItems.length);
  let jobsRunning = 0;
  /**
   * @type {function}
   */
  let unsubscribeFromJobs;

  onMount(() => {
    unsubscribeFromJobs = Jobs.subscribe((newState) => {
      jobItems.length = 0;
      newState.forEach((value, key) => {
        const item = {
          id: key,
          creationTime: value.ct,
          recordsNum: value.recordsNum,
          rps: value.rps,
          executionTime: value.executionTime,
        };

        jobItems.push(item);
      });
    });
  });

  onDestroy(() => {
    unsubscribeFromJobs();
  });
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
  }
</style>

    <div id="job-list-header">
      <JobsListHeader 
        {jobsTotal}
        {jobsRunning}
      />
    </div>
    <div id="job-list-items">
      {#each jobItems as jobItem(jobItem.id)}
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