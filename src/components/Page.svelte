<script lang="ts">
  export let location: string
  export let title: string
</script>

<svelte:head>
  <title>{ title }</title>
</svelte:head>

<h1 class="border">{ location }</h1>