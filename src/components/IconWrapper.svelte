<script lang="ts">
  export let color: string
</script>

<div
  class="flex align-center justify-center m-auto fill-current w-10 h-10 {color}"
>
  <slot />
</div>
