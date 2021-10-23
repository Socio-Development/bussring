<script lang="ts">
  import type { IDeparture } from '../types/interfaces'
  import Table from './Table.svelte'

  export let departureList: IDeparture[]
  export let locationName: string
  export let showLocationName: boolean = false
</script>

<svelte:head>
  <title>{ locationName }</title>
</svelte:head>

<div class="container">
  {#if showLocationName}
    <h3>Holdeplass</h3>
    <h1>{ locationName }</h1>
  {/if}

  <Table {departureList} />
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