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
    height: 100%;
    width: 50svw;
    margin: 0 auto;
  
  }

  #section-jobs {
    grid-area: jobs;
    background-color: var(--theme-black);
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
    <Jobs />
  </section>
  <section id="section-binning-settings">
    <BinningSettings />
  </section>
  <section id="section-statistics">
    <Statistics />
  </section>
</article>