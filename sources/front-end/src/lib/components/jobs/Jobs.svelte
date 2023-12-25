<script>
  import {
    onMount,
  } from 'svelte';
  import JobItem from './JobItem.svelte';

  let jobItems = $state([]);

  onMount(() => {
    for (let i = 0; i < 15; i += 1) {
      const item = {
        id: i,
      };

      jobItems.push(item);

      console.log(item);

    }
  });

</script>

<style>
</style>

    {#each jobItems as jobItem (jobItem.id)}
        <JobItem jobItemId={jobItem.id} />
    {/each}