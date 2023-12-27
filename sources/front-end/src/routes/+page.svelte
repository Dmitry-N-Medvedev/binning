<script>
  import {
    onMount,
    onDestroy,
  } from 'svelte';
  import JobsMainComponent from '$lib/components/jobs/JobsMainComponent.svelte';
  import BinningSettings from '$lib/components/binning-settings/BinningSettings.svelte';
  import Statistics from '$lib/components/statistics/Statistics.svelte';
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


  #section-binning-settings {
    grid-area: settings;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
    grid-template-areas:
      'binning-settings-header'
      'binning-settings-items'
    ;
    gap: 0.5rem;
    overflow: hidden;
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
    <JobsMainComponent />
  </section>
  <section id="section-binning-settings">
    <BinningSettings />
  </section>
  <section id="section-statistics">
    <Statistics />
  </section>
</article>