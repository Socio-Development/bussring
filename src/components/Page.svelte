<script lang="ts">
  import type { IDeparture } from '$lib/interfaces'
import Countdown from './Countdown.svelte'
  import Table from './Table.svelte'

  export let departureList: IDeparture[]
  export let locationName: string
  export let showETD: string
  export let showLocationName: string
</script>

<svelte:head>
  <title>{ locationName }</title>
</svelte:head>

<div class="Page">
  <div class="top">
    {#if (showLocationName !== 'false')}
      <div class="location-name">
        <h3>Holdeplass</h3>
        <h1>{ locationName }</h1>
      </div>
    {/if}
  
    <Table
      {showETD}
      {departureList}
    />
  </div>
  {#if showETD !== 'true'}
    <Countdown eta={ departureList[0].departureTime } />
  {/if}
</div>

<style>
  .Page {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    min-width: fit-content;
  }
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