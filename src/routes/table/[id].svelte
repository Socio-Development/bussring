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
        showETD: page.query.get('showETD'),
        showLocationName: page.query.get('showLocationName')
      }
    }
  }
</script>

<script lang="ts">
  import {
    getApiData,
    getDepartureList,
    getLocationName
  } from '$lib/functions'
import type { IApiData } from '$lib/interfaces';
import { onMount } from 'svelte';
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
   * Do you wish to display the estimated time of departure?
   * @path /<id-number>?showETD=<boolean>
   * @default true
  */
  export let showETD: string
  /**
   * Do you wish to display the location name?
   * @path /<id-number>?showLocationName=<boolean>
   * @default true
  */
  export let showLocationName: string

  let data

  onMount(async () => {
    const query = `{
      stopPlace(id: "NSR:StopPlace:52806") {
        name
        id
        estimatedCalls(numberOfDepartures: 7) {
          expectedDepartureTime
          destinationDisplay {
            frontText
          }
          serviceJourney {
            line {
              publicCode
              transportMode
            }
          }
        }
      }
    }`

    await fetch('https://api.entur.io/journey-planner/v2/graphql', {
      method: 'POST',
      headers: {
        'ET-Client-Name': 'bussring-digital_signage',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query }),
    })
      .then(res => res.json())
      .then(stopPlaceData => {
        data = stopPlaceData
      })
  })
</script>

<div
  class="container"
  style={ `background: ${background || '#8A2A2B'}; --color: ${ color || '#fff' };` }
>
  {#if !data}
    <p>Loading...</p>
  {:else}
    <Page
      departureList={ getDepartureList(data) }
      locationName={ getLocationName(data) }
      {showETD}
      {showLocationName}
    />
  {/if}
</div>

<style>
  .container {
    -ms-overflow-style: none;
    color: var(--color);
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: scroll;
    padding: 2rem;
    scrollbar-width: none;
  }
  .container::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 650px) {
    .container {
      padding: 16px;
    }
  }
</style>