<script>
  import JobItem from './JobItem.svelte';
</script>

<style>
  li {
    /* counter-increment: job_item; */
  }

  li::before {
    counter-increment: job_item;
    content: counter(job_item);
  }
</style>
