<script lang="ts">
  import { parseAPI } from '../utils'

  export let resultLimit: number
  export let stopPlaceId: number

  function fetchFromAPI() {
    const query = `{
      stopPlace(id: "NSR:StopPlace:${ stopPlaceId }") {
        name
        id
        estimatedCalls(numberOfDepartures: ${ resultLimit }) {
          expectedDepartureTime
          destinationDisplay {
            frontText
          }
          serviceJourney {
            line {
              publicCode
            }
          }
        }
      }
    }`

    return fetch('https://api.entur.io/journey-planner/v2/graphql', {
      method: 'POST',
      headers: {
          // Replace this with your own client name:
          'ET-Client-Name': 'bussring-digital-signage',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query }),
    })
      .then(res => res.json())
      .then(stopPlaceData => parseAPI(stopPlaceData))
  }

  /**
   * Get minutes to departure as a number
   * @param time Date
   */
  function countdownMinutes(time: Date) {
    return Math.round((time.getTime() - Date.now()) / 60000)
  }

  /**
   * Get time to departure as a string
   * @param time Date
   */
  function displayCountdown(time: Date) {
    const minutes = countdownMinutes(time)

    // Exclude hours
    if (minutes < 60) {
      return minutes + ' min'
    }
    // Exclude days
    if (minutes < 1440) {
      const hours = Math.floor(minutes / 60)
      return hours + ' t ' + (minutes % 60) + ' min'
    }
  }
</script>

{#await fetchFromAPI()}
  <p>Loading...</p>
{:then jsonData}
  <table>
    <thead>
      <tr>
        <th>Avgang</th>
        <th>Destinasjon</th>
        <th>Nedtelling</th>
      </tr>
    </thead>
    <tbody>
      {#each jsonData as body}
        <!-- Display only if time to departure is positive -->
        {#if countdownMinutes(body.departureTime) > 0}
          <tr>
            <td>{ body.departureTime.toLocaleTimeString('nb-NO', { hour: '2-digit', minute: '2-digit' }) }</td>
            <td>{ body.destination }</td>
              <td><strong>{ displayCountdown(body.departureTime) }</strong></td>
          </tr>
        {/if}
      {/each}
    </tbody>
  </table>
{/await}

<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th {
    border-bottom: 1px solid #fff;
    font-size: 1.6rem;
    text-align: left;
  }
  tr:nth-child(even) {
    background: rgba(255, 255, 255, .1);
  }
  td,
  th {
    padding: .6rem 1rem;
  }
  td:first-child,
  th:first-child {
    text-align: center;
    white-space: nowrap;
    width: 0.1%;
  }
</style>