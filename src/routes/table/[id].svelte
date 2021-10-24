<script context="module">
  export async function load({
    page,
    fetch,
    session,
    context
  }) {
    return {
      props: {
        background: page.query.get('background'),
        id: page.params.id,
        limit: page.query.get('limit'),
        showLocationName: page.query.get('showLocationName')
      }
    }
  }
</script>

<script lang="ts">
  import { getApiData, getDepartureList, getLocationName } from '../../utils'
  import Page from '../../components/Page.svelte'

  /**
   * Override the background color
   * @path /<id-number>?background=<hex-color>
   */
  export let background: string
  /**
   * The NSR id of the bus stop
   * @path /<id-number>
   */
  export let id: number
  /**
   * The limit of rows to display (max 7)
   * @path /<id-number>?limit=<number>
   */
  export let limit: number
  /**
   * Do you wish to display the location name?
   * @path /<id-number>?showLocationName=<boolean>
   * @default true
  */
  export let showLocationName: string
</script>

<div
  class="container"
  style={ `background: ${background || '#8A2A2B'};` }
>
  {#await getApiData(id, limit || 7)}
    <p>Loading...</p>
  {:then jsonData}
    <Page
      departureList={ getDepartureList(jsonData) }
      locationName={ getLocationName(jsonData) }
      {showLocationName}
    />
  {/await}
</div>

<style>
  .container {
    height: 100vh;
    padding: 2rem;
  }
  @media (max-width: 650px) {
    .container {
      padding: 16px;
    }
  }
</style>