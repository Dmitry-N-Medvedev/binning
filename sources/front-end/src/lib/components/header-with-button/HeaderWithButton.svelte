<script>
  let {
    title = 'n/a',
    stat = null,
    onButtonClick = () => {},
  } = $props();
</script>

<style>
  .header {
    display: grid;
    grid-template-columns: 5fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'title button stats'
    ;
    background-color: var(--theme-blue);
  }

  .header > h2 {
    grid-area: title;
    display: flex;
    justify-content: start;
    align-items: center;
    color: var(--main-background-color);
    padding-left: 2rem;
  }
  
  .header > .button-container {
    grid-area: button;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
  }

  .button-container > button {
    display: flex;
    flex: 1 0 100%;
    aspect-ratio: 1 / 1;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    font-variation-settings: "wght" 900, "opsz" 32;
    background-color: var(--theme-black);
    color: var(--theme-white);
    border-radius: 0.25rem;
    cursor: pointer;
  }

  .header > .stats-container {
    grid-area: stats;
    display: flex;
    justify-content: center;
    align-items: center;
    font-feature-settings: "frac";
    font-variation-settings: "wght" 150, "opsz" 32;
    font-size: 3rem;
  }
</style>

<div class="header">
  <h2>{title}</h2>
  <div class="button-container">
    <button on:click|stopPropagation|trusted|preventDefault={onButtonClick}>&#x0002B;</button>
  </div>
  <div class="stats-container">
    {stat}
  </div>
</div>