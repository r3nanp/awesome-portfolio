<script lang="ts">
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import type { IAPIRepos } from './types'

  import Footer from './components/Footer.svelte'
  import Header from './components/Header.svelte'
  import Presentation from './components/Presentation.svelte'
  import Skills from './components/Skills.svelte'
  import About from './components/About.svelte'

  let repos: IAPIRepos[] = []

  onMount(async () => {
    const response = await fetch('https://api.github.com/users/r3nanp/repos')
    const data = await response.json()

    const shuffledRepos = data.sort(() => 0.5 - Math.random())
    const slicedRepos = shuffledRepos.slice(0, 6)

    repos = slicedRepos
  })
</script>

<Header />
<main>
  <Presentation />

  <About />
  <section>
    <article class="bg-gray-100 text-center p-10 dark:bg-gray-800">
      <h1 class="center text-4xl font-bold py-2 dark:text-white">Projetos</h1>
      <div
        class="grid grid-cols-1 grid-rows-4 gap-y-4 sm:px-6 md:px-8 md:grid-cols-3 md:grid-rows-1 gap-x-4"
      >
        {#if repos}
          {#each repos as { name, html_url, description }}
            <div
              transition:fly={{ x: -40, duration: 2000 }}
              class="flex justify-center bg-white dark:shadow-xl dark:bg-gray-700 flex-col items-center md:justify-start shadow-md h-44 text-center py-4 rounded m-2"
            >
              <strong class="text-black dark:text-white text-center text-xl"
                >{name}</strong
              >
              <p class="text-center text-md px-2 dark:text-white">
                {description}
              </p>
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                class="flex justify-center items-center py-3 px-4 my-2 bg-blue-600 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700 w-28 h-12 rounded"
              >
                <span
                  class="uppercase text-center text-white font-bold text-md pr-2"
                  >github</span
                >
              </a>
            </div>
          {/each}
        {:else}
          <p class="text-2xl p-2">Loading...</p>
        {/if}
      </div>
      <a
        href="https://github.com/r3nanp?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-700 tracking-wide mt-2 transition hover:underline text-xl dark:text-purple-700"
      >
        Meus repositórios no Github
      </a>
    </article>
  </section>

  <Skills />
</main>
<Footer />

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
