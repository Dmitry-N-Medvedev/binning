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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: row;
    gap: 0.25rem;
    font-size: 1.125rem;
    width: 100%;
  }

  .value {
    aspect-ratio: 2 / 1;
  }
</style>

<div class="job-statistics-concise">
  <div class="value">
    <StatValueCtl
      value="{ctValue}"
      hint="created at"
    />
  </div> 
  <div class="value">
    <StatValueCtl
      value="{recordsNum}"
      hint="num of records"
    />
  </div> 
  <div class="value">
    <StatValueCtl
      value="{rps}"
      hint="records/sec"
    />
  </div> 
  <div class="value">
    <StatValueCtl
      value="{executionTime}"
      hint="execution time"
    />
  </div> 
</div>