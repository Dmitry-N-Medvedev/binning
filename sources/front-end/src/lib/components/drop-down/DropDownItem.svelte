<script>
  let {
    onClick,
    data,
  } = $props();

  let binWidth = $state(0);
  let id = $state('');

  function handleClick(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    // @ts-ignore
    onClick({
      id,
      text: `${data.binWidth}`,
    });
  }

  $effect(() => {
    binWidth = data.binWidth;
    id = data.id;
  });
</script>

<style>
  .drop-down-item {
    width: auto;
    height: auto;
    cursor: pointer;

    background-color: var(--theme-black);
    border: none;
    color: var(--theme-white);
    font-size: 2rem;
  }

  .drop-down-item:hover {
    background-color: var(--theme-green);
    color: var(--theme-black);
  }

  .data-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      'binWidthKey binWidthValue'
      'id id'
    ;
    gap: 1rem;
    padding: 1rem;
    min-width: 20rem;
  }

  .binWidthKey {
    grid-area: binWidthKey;
  }

  .binWidthValue {
    grid-area: binWidthValue;
  }

  .id {
    grid-area: id;
  }

  .binWidthKey,
  .binWidthValue,
  .id {
    display: flex;
    align-items: center;
  }

  .binWidthKey {
    justify-content: start;
  }

  .binWidthValue {
    justify-content: end;
  }

  .id {
    justify-content: center;
    font-size: 0.9rem;
  }
</style>

<button type="button" class="drop-down-item" onclick={handleClick}>
  <div class="data-grid">
    <div class="binWidthKey">binWidth</div>
    <div class="binWidthValue">{data.binWidth}</div>
    <div class="id">{data.id}</div>
  </div>
</button>