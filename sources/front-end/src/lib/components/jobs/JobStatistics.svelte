<script>
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
    display: flex;
    justify-content: center;
    align-items: center;
    font-variation-settings: "wght" 700;
    font-size: 1.5rem;
    line-height: 0;

  }
</style>

<div class="job-statistics-concise">
 <div class="value">{ctValue}</div> 
 <div class="value">{recordsNum}</div> 
 <div class="value">{rps}</div> 
 <div class="value">{executionTime}</div> 
</div>