<script>
  export const toggle = false
</script>

<button
  class="text-white hover:opacity-70 cursor-pointer w-10 h-10 focus:outline-none"
  on:click={() => (toggle = !toggle)}>
  <i class="fas fa-bars" />
</button>
