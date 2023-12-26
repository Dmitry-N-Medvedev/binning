<script>
  import StatValueCtl from "./StatValueCtl.svelte";

  let {
    ctValue = 'N/A',
    recordsNum = 'N/A',
    rps = 'N/A',
    executionTime = 'N/A',
  } = $props();
</script>
<style>
  .job-statistics-concise {
    grid-area: job-statistics;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: row;
    gap: 0.25rem;
    font-size: 1.125rem;
    width: 100%;
  }

  .value {
    container-type: inline-size;
    /* aspect-ratio: 3 / 1; */
  }
</style>

<div class="job-statistics-concise">
    <StatValueCtl
      value="{ctValue}"
      hint="created at"
    />
    <StatValueCtl
      value="{recordsNum}"
      hint="num of records"
    />
    <StatValueCtl
      value="{rps}"
      hint="records/sec"
    />
    <StatValueCtl
      value="{executionTime}"
      hint="execution time"
    />
</div>