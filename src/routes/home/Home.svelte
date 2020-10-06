<script>
  export let data, helpers,  request, settings;
  import Clock from '../../components/Clock.svelte'
</script>

<svelte:head>
  <title>Home | Elderjs minimal</title>
  <meta name="description" content="Put your description here." />
</svelte:head>

<Clock hydrate-client={{}} />

<a href="/simple/">Simple</a>
