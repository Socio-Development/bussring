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
        showLocationName: page.query.get('showLocationName')
      }
    }
  }
</script>

<script lang="ts">
  import { getApiData, getDepartureList, getLocationName } from '../../utils'
  import Page from '../../components/Page.svelte'

  /**
   * The NSR id of the bus stop
   */
  export let id: number
  /**
   * The limit of rows to display (max 7)
   */
  export let limit: number
  /**
   * Do you wish to display the location name?
  */
  export let showLocationName: boolean = false
</script>

{#await getApiData(id, limit || 7)}
  <p>Loading...</p>
{:then jsonData}
  <Page
    departureList={ getDepartureList(jsonData) }
    locationName={ getLocationName(jsonData) }
    {showLocationName}
  />
{/await}