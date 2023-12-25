<script>
  import Jobs from '$lib/components/jobs/Jobs.svelte';
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

    background-color: var(--theme-black);
  }

  #section-jobs > #job-list-header {
    grid-area: job-list-header;

    height: 8rem;

    background-color: yellowgreen;
  }

  #section-jobs > #job-list-items {
    grid-area: job-list-items;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content;
    gap: 0.5rem;

    height: 100%;

    overflow-y: scroll;
  }

  #section-binning-settings {
    grid-area: settings;
    background-color: var(--theme-black);
  }

  #section-statistics {
    grid-area: statistics;
    background-color: var(--theme-black);
  }
</style>

<article>
  <section id="section-jobs">
    <div id="job-list-header">jobs header</div>
    <div id="job-list-items">
      <Jobs />
    </div>
  </section>
  <section id="section-binning-settings">
    <BinningSettings />
  </section>
  <section id="section-statistics">
    <Statistics />
  </section>
</article>