<script>
  export let templateHtml;
</script>

<style>
  :global(h1) {
    font-style: italic;
  }
  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;
  }
</style>

<svelte:head>
  <link rel="stylesheet" href="/style.css" />
</svelte:head>

<div class="container">
  {@html templateHtml}
</div>
