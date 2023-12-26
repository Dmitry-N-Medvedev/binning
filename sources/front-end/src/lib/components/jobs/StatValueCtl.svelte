<script>
  let {
    value = 'N/A',
    hint  = 'N/A',
  } = $props();
</script>

<style>
  .stat-value {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      'value'
      'hint'
    ;
    height: 100%;
  }

  .value,
  .hint {
    display: flex;
    flex: 1 0 auto;
    align-items: center;
    justify-content: center;
    line-height: 0;
  }

  .value {
    grid-area: value;
    font-variation-settings: "wght" 250;
    font-size: 2rem;
  }

  .hint {
    grid-area: hint;
    font-variation-settings: "wght" 250;
    font-size: 1rem;
    filter: opacity(0.0);
    height: 1.5rem;
    padding: 0.25rem;

    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .stat-value:hover {
    background-color: var(--theme-green);
    color: var(--theme-black);
  }

  .stat-value:hover .hint {
    filter: opacity(1.0);
  }
</style>

<div class="stat-value">
  <div class="value">
    {value}
  </div>
  <div class="hint">
    {hint}
  </div>
</div>