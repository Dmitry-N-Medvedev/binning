<style>
  div {
    display: grid;
    grid-template-columns: 5fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'title add-new statistics'
    ;
    max-height: 8rem;
    padding: 0.25rem 1rem;
    background-color: var(--theme-blue);
  }

  div > h2 {
    grid-area: title;
    display: flex;
    justify-content: start;
    align-items: center;
    color: var(--main-background-color);
  }

  div > #add-new {
    grid-area: add-new;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #add-new > button {
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

  div > #jobs-header-statistics {
    grid-area: statistics;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      'statistics-running'
      'statistics-total'
    ;
    gap: 0.5rem;
    padding: 0.5rem 0;
  }

  div #jobs-header-statistics-running {
    grid-area: statistics-running;
    color: var(--main-background-color);

    background-color: var(--theme-green);
  }

  div #jobs-header-statistics-total {
    grid-area: statistics-total;
    color: var(--theme-white);

    background-color: var(--main-background-color);
  }
  
  #jobs-header-statistics-running,
  #jobs-header-statistics-total {
    display: flex;
    justify-content: end;
    align-items: center;
    font-variation-settings: "wght" 600, "opsz" 32;
  }
</style>

<div>
  <h2>jobs</h2>
  <div id="add-new">
    <button>&#x0002B;</button>
  </div>
  <div id="jobs-header-statistics">
    <div id="jobs-header-statistics-running">10</div>
    <div id="jobs-header-statistics-total">15</div>
  </div>
</div>