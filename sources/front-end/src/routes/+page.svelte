<script>
  import {
    onMount,
  } from 'svelte';
  import JobItem from '$lib/components/jobs/JobItem.svelte';
  import BinningSettings from '$lib/components/binning-settings/BinningSettings.svelte';
  import Statistics from '$lib/components/statistics/Statistics.svelte';
  import JobsListHeader from '$lib/components/jobs/JobsListHeader.svelte';

  /**
   * @type Array<object>
   */
  let jobItems = $state([]);

  onMount(() => {
    for (let i = 0; i < 15; i += 1) {
      const item = {
        id: self.crypto.randomUUID(),
        creationTime: Date.now(),
        recordsNum: Math.ceil(Math.random() * 1000 + 1045),
        rps: Math.ceil(Math.random() * 10000 + 1045),
        executionTime: Math.ceil(Math.random() * 60),
      };

      jobItems.push(item);
    }
  });
</script>

<style>
  article {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    grid-template-areas:
      'jobs settings'
      'jobs statistics'
    ;
    width: 50svw;
    margin: 0 auto;
    height: 100%;

    /* counter-reset: jli; */
  }

  #section-jobs {
    grid-area: jobs;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
    grid-template-areas:
      'job-list-header'
      'job-list-items'
    ;
    gap: 0.5rem;
    overflow: hidden;
  }

  #job-list-header {
    grid-area: job-list-header;
  }

  #job-list-items {
    grid-area: job-list-items;
    display: grid;
    grid-template-columns: unset;
    grid-template-rows: unset;
    grid-auto-flow: row;
    gap: 0.5rem;

    counter-reset: jli;

    overflow-y: auto;
  }

  #section-binning-settings {
    grid-area: settings;
  }

  #section-statistics {
    grid-area: statistics;
  }

  #section-jobs,
  #section-binning-settings,
  #section-statistics {
    background-color: var(--theme-none);
  }
</style>

<article>
  <section id="section-jobs">
    <div id="job-list-header">
      <JobsListHeader />
    </div>
    <div id="job-list-items">
      {#each jobItems as jobItem (jobItem.id)}
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
  </section>
  <section id="section-binning-settings">
    <BinningSettings />
  </section>
  <section id="section-statistics">
    <Statistics />
  </section>
</article>