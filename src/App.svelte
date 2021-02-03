<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import type { IAPIRepos } from './types';

  import Footer from './Footer.svelte';
  import Header from './components/Header/Header.svelte';

  let repo_info: IAPIRepos[] = [];

  onMount(async () => {
    const response = await fetch('https://api.github.com/users/r3nanp/repos');
    const data = await response.json();

    repo_info = data;
  });
</script>

<svelte:head>
  <title>Renan Pereira - Portfolio</title>

  <meta name="description" content="My portfolio using new techs!" />

  <meta property="og:site_name" content="Renan Portfolio" />

  <meta property="og:title" content="Renan Pereira - Portfolio" />
  <meta property="og:description" content="My portfolio using new techs!" />

  <meta property="og:image" content="../public/icon.png" />
  <meta property="og:image:type" content="image/png" />

  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <link rel="icon" href="/icon.png" />
</svelte:head>

<main class="h-screen">
  <Header />
  <ul class="p-2">
    {#if repo_info}
      {#each repo_info as { name }, i}
        <li transition:fly={{ x: -40, duration: 2000 }}>{i + 1}: {name}</li>
      {/each}
    {:else}
      <p class="text-2xl p-2">Loading...</p>
    {/if}
  </ul>
  <Footer />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
