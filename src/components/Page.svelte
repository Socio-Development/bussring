<script lang="ts">
  import Table from './Table.svelte'

  export let location: string
  export let resultLimit: number
  export let stopPlaceId: number
  export let title: string
</script>

<svelte:head>
  <title>{ title }</title>
</svelte:head>

<div class="container">
  <h3>Departure</h3>
  <h1>{ location }</h1>
  
  <Table
    {resultLimit}
    {stopPlaceId}
  />
</div>

<style>
  .container {
    padding: 2rem;
  }
  h1 {
    font-size: 3.2rem;
    margin-top: 0;
  }
  h3 {
    color: rgba(255, 255, 255, .8);
    margin: 0;
  }
</style>