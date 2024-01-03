<script>
  import DropDownItem from "./DropDownItem.svelte";

  let {
    /**
     * @type {Array<object>}
    */
    items,
  } = $props();
  let selectedValue = $state('N/A');
  let selectedBinId = $state('');

  /**
   * 
   * @param e {object}
   */
  function handleDropDownItemClick(e) {
    const {
      id,
      text,
    } = e;

    selectedBinId = id;
    selectedValue = text;
  }
</script>

<style>
  .drop-down {
    height: 100%;
    border: 0.25rem solid var(--theme-green);
  }

  .drop-down > .selected-value {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .drop-down:hover .drop-down-items {
    visibility: visible;
    z-index: 1;
  }

  .drop-down-items {
    --padding: 0.5rem;

    visibility: hidden;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: absolute;
    width: auto;
    top: 100%;
    list-style: none;
    margin: 0;
    right: calc(0px - (var(--padding) / 2));
    padding: var(--padding);
    background-color: var(--theme-green);
  }
</style>

<div class="drop-down">
  <div class="selected-value">{selectedValue}</div>
  <ul class="drop-down-items">
    {#each items.values() as item(item.id)}
      <li id={item.id}>
        <DropDownItem 
          onClick={handleDropDownItemClick}
          data={item}
        />
      </li>
    {/each}
  </ul>
</div>