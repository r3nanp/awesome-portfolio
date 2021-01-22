<script lang="ts" context="module">
  import Footer from './Footer.svelte'
  import Header from './Header.svelte'
</script>

<main class="h-screen">
  <Header />

  <Footer />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
