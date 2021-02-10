<script lang="ts">
  import IconWrapper from './IconWrapper.svelte'
  import Box from './Box.svelte'

  import DiHtml5 from 'svelte-icons/di/DiHtml5.svelte'
  import DiJsBadge from 'svelte-icons/di/DiJsBadge.svelte'
  import DiCss3 from 'svelte-icons/di/DiCss3.svelte'
  import DiReact from 'svelte-icons/di/DiReact.svelte'
  import DiNodejsSmall from 'svelte-icons/di/DiNodejsSmall.svelte'
  import DiDatabase from 'svelte-icons/di/DiDatabase.svelte'
</script>

<section class="mt-6 text-center p-10 overflow-hidden w-full">
  <h2 class="font-bold text-4xl text-black">Habilidades</h2>

  <div class="flex h-auto flex-wrap mt-4">
    <Box>
      <IconWrapper color="text-red-600">
        <DiHtml5 />
      </IconWrapper>

      <h2 class="mt-4 text-2xl font-bold">HTML</h2>
      <p class="text-md font-normal">2 anos de XP</p>
    </Box>

    <Box>
      <IconWrapper color="text-blue-500">
        <DiCss3 />
      </IconWrapper>

      <h2 class="mt-4 text-2xl font-bold">CSS</h2>
      <p class="text-md font-normal">2 anos de XP</p>
    </Box>

    <Box>
      <IconWrapper color="text-yellow-400">
        <DiJsBadge />
      </IconWrapper>

      <h2 class="mt-4 text-2xl font-bold">Javascript</h2>
      <p class="text-md font-normal">2 anos de XP</p>
    </Box>

    <Box>
      <IconWrapper color="text-yellow-200">
        <DiDatabase />
      </IconWrapper>

      <h2 class="mt-4 text-2xl font-bold">SQL</h2>
      <p class="text-md font-normal">2 anos de XP</p>
    </Box>

    <Box>
      <IconWrapper color="text-blue-500">
        <DiReact />
      </IconWrapper>

      <h2 class="mt-4 text-2xl font-bold">React</h2>
      <p class="text-md font-normal">7 meses de XP</p>
    </Box>

    <Box>
      <IconWrapper color="text-green-500">
        <DiNodejsSmall />
      </IconWrapper>

      <h2 class="mt-4 text-2xl font-bold">Node.js</h2>
      <p class="text-md font-normal">7 meses de XP</p>
    </Box>
  </div>
</section>
