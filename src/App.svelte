<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import type { IAPIRepos } from './types';

  import Footer from './components/Footer.svelte';
  import Header from './components/Header/Header.svelte';
  import Presentation from './components/Presentation.svelte';

  let repos: IAPIRepos[] = [];

  onMount(async () => {
    const response = await fetch('https://api.github.com/users/r3nanp/repos');
    const data = await response.json();

    const shuffledRepos = data.sort(() => 0.5 - Math.random());
    const slicedRepos = shuffledRepos.slice(0, 6);

    repos = slicedRepos;
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

<Header />
<main>
  <Presentation />
  <article class="text-center my-2">
    <h1 class="center text-4xl font-bold py-2">Projetos</h1>
    <ul
      class="p-2 bg-gray-100 grid grid-cols-1 grid-rows-4 gap-y-4 sm:px-6 md:px-8 md:grid-cols-3 md:grid-rows-1 gap-x-2"
    >
      {#if repos}
        {#each repos as { name, html_url, description }}
          <li
            transition:fly={{ x: -40, duration: 2000 }}
            class="flex justify-center flex-col items-center md:justify-start shadow-xl w-30 h-40 text-center py-4"
          >
            <a
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
              class="w-30 h-40 flex flex-col items-center justify-center"
            >
              <strong class="text-black text-center text-xl">{name}</strong>

              <p class="text-center text-md px-2">{description}</p>
            </a>
          </li>
        {/each}
      {:else}
        <p class="text-2xl p-2">Loading...</p>
      {/if}
    </ul>
  </article>
</main>
<Footer />

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
