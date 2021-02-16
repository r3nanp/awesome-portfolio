<script>
  export let toggle = false
</script>

<button
  class="text-white hover:opacity-70 cursor-pointer w-10 h-10 focus:outline-none md:hidden"
  name="hamburger"
  on:click={() => (toggle = !toggle)}>
  <i class="fas fa-bars fill-current text-black text-4xl" />
</button>
