<script lang="ts">
  import SvgWrapper from './SVGWrapper.svelte'
  import Wrapper from './Wrapper.svelte'

  let projectUrl: string;
</script>

<main>
  <Wrapper>
    <a href={projectUrl} target="_blank" rel="noreferrer noopener">
      <SvgWrapper />
    </a>
  </Wrapper>
</main>
