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
        color: page.query.get('color'),
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
   * EXAMPLE ID's
   * Scandic Ishavshotel: 52806
   * Tromsø Lufthavn: 52281
   */

  /**
   * Override the background color
   * @path /<id-number>?background=<hex-color>
   */
  export let background: string
  /**
   * Override the text color
   * @path /<id-number>?color=<hex-color>
   */
  export let color: string
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
  style={ `background: ${background || '#8A2A2B'}; --color: ${ color || '#fff' };` }
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
    color: var(--color);
    height: 100vh;
    overflow-y: scroll;
    padding: 2rem;
  }
  @media (max-width: 650px) {
    .container {
      padding: 16px;
    }
  }
</style>