<script lang="ts">
  import Footer from './Footer.svelte'
  import Header from './components/Header/Header.svelte'
  // import GithubCorner from './components/GithubCorner/GithubCorner.svelte'

  import { onMount } from 'svelte'
  import type { IAPIRepos } from './types'

  let repo_info: IAPIRepos[] = []

  onMount(async () => {
    const response = await fetch('https://api.github.com/users/r3nanp/repos')
    const data = await response.json()

    repo_info = data
  })
</script>


<svelte:head>
  <title>Renan Pereira - Portfolio</title>

  <meta name="description" content="My portfolio using new techs!" />

  <meta property="og:site_name" content="Renan Portfolio" />

  <meta property="og:title" content="Renan Pereira - Portfolio" />
  <meta property="og:description" content="My portfolio using new techs!" />

  <meta property="og:image" content="/icon.png" />
  <meta property="og:image:type" content="image/png" />

  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <link rel="icon" href="/icon.png" />
</svelte:head>

<main class="h-screen">
  <Header />
  <ul>
    {#if repo_info}
      {#each repo_info as { name }, i}
        <li>{i + 1}: {name}</li>
      {/each}
      {:else}
        <p class="text-2xl">Loading...</p>
    {/if}
  </ul>
  <Footer />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
