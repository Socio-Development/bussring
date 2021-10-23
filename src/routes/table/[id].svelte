<script context="module">
  export async function load({
    page,
    fetch,
    session,
    context
  }) {
    return {
      props: {
        id: page.params.id,
        limit: page.query.get('limit'),
        showName: page.query.get('showName')
      }
    }
  }
</script>

<script lang="ts">
  import { getApiData, getDepartureList, getLocationName } from '../../utils'
  import Table from '../../components/Table.svelte'

  /**
   * The NSR id of the bus stop
   */
  export let id: number
  /**
   * The limit of rows to display (max 7)
   */
  export let limit: number = 7
  /**
   * Do you wish to display the location name?
  */
  export let showName: boolean = false


</script>

{#await getApiData(id, limit)}
  <p>Loading...</p>
{:then jsonData}
  {#if showName}
    <h1>{ getLocationName(jsonData) }</h1>
  {/if}
  <Table departureList={ getDepartureList(jsonData) } />
{/await}

<style>
  h1 {
    font-size: 3.2rem;
    margin-top: 0;
  }
</style>