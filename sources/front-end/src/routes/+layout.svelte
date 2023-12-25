<script>
	import 'inter-ui/inter-variable.css';
	import { env } from '$env/dynamic/public';
	import { browser as IsInBrowser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';
  import Header from '$lib/containers/header/Header.svelte';
  import Footer from '$lib/containers/footer/Footer.svelte';

	onMount(async () => {
		if (IsInBrowser === true) {
			console.log('onMount');
		}
	});

	onDestroy(async () => {
		if (IsInBrowser === true) {
			console.log('onDestroy');
		}
	});
</script>

<style>
  div {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      'header'
      'main'
      'footer'
    ;
    gap: 1rem;
  
    min-height: 100svh;
    max-height: 100svh;
  }
  header {
    grid-area: header;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
  }

  main {
    grid-area: main;
    overflow: hidden;
  }

  footer {
    grid-area: footer;
    bottom: 0;
  }

  header, footer {
    position: sticky;
  }
</style>

<div>
  <Header />
  <main>
	  <slot />
  </main>
  <Footer />
</div>