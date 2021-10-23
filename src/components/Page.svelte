<script lang="ts">
  import { getApiData, getDepartureList } from '../utils'
  import Table from './Table.svelte'

  export let location: string
  export let resultLimit: number
  export let stopPlaceId: number
</script>

<svelte:head>
  <title>{ location }</title>
</svelte:head>

<h3>Lokasjon</h3>
<h1>{ location }</h1>

{#await getApiData(stopPlaceId, resultLimit)}
  <p>Loading...</p>
{:then jsonData}
  <Table departureList={ getDepartureList(jsonData) } />
{/await}

<style>
  h1 {
    font-size: 3.2rem;
    margin-top: 0;
  }
  h3 {
    color: rgba(255, 255, 255, .8);
    margin: 0;
  }
</style>