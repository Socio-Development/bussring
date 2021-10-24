<script lang="ts">
  import type { IDeparture } from '../types/interfaces'
  import Table from './Table.svelte'

  export let departureList: IDeparture[]
  export let locationName: string
  export let showLocationName: string
</script>

<svelte:head>
  <title>{ locationName }</title>
</svelte:head>

<div>
  {#if (showLocationName !== 'false')}
    <h3>Holdeplass</h3>
    <h1>{ locationName }</h1>
  {/if}

  <Table {departureList} />
</div>

<style>
  h1 {
    font-size: 3.2rem;
    margin-top: 0;
  }
  h3 {
    color: var(--color);
    font-size: 1.2rem;
    margin: 0;
    opacity: .8;
  }
  @media (max-width: 650px) {
    h1 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
</style>