<script lang="ts">
  import type { IDeparture } from '../types/interfaces'

  /**
   * TODO:
   * - Make sure to codesplit this file
   * - Start interval on mount to update countdown
   *   - See (https://svelte.dev/repl/clock?version=3.38.2)
   * - Add placeholder loading effect
   */

  export let departureList: IDeparture[]

  /**
   * Get minutes to departure as a number
   * @param time Date
   */
  function countdownMinutes(time: Date) {
    const minutesLeft = (time.getTime() - Date.now()) / 60000
    return Math.round(minutesLeft)
  }

  /**
   * Get time to departure as a string
   * @param time Date
   */
  function displayCountdown(time: Date) {
    const minutes = countdownMinutes(time)

    // Display "Leaving soon" notification
    if (minutes < 6) {
      return 'Under 5 min'
    }
    // Exclude hours
    if (minutes < 60) {
      return minutes + ' min'
    }
    // Exclude days
    if (minutes < 1440) {
      const hours = Math.floor(minutes / 60)
      return hours + ' t ' + (minutes % 60) + ' min'
    }
    return '24+ t'
  }
</script>

<table>
  <thead>
    <tr>
      <th>Avgang</th>
      <th>Rute</th>
      <th></th>
      <th>Destinasjon</th>
      <th>Går om</th>
    </tr>
  </thead>
  <tbody>
    {#each departureList as departure}
      <!-- Display only if time to departure is positive -->
      {#if countdownMinutes(departure.departureTime) > 0}
        <tr>
          <td>{ departure.departureTime.toLocaleTimeString('nb-NO', { hour: '2-digit', minute: '2-digit' }) }</td>
          <td>{ departure.line }</td>
          <td>
            {#if departure.transport === 'air'}
              Fly
            {:else if departure.transport === 'bus'}
              <svg
                width="auto"
                height="1.2rem"
                viewBox="0 0 84 88"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
              >
                <path d="M4.167,21.272l-2.065,-0c-0.557,-0 -1.092,0.221 -1.486,0.615c-0.395,0.395 -0.616,0.929 -0.616,1.487c0,3.201 0,9.261 0,12.462c-0,0.558 0.221,1.092 0.616,1.487c0.394,0.394 0.929,0.615 1.486,0.615l2.065,0l-0,30.935c-0,3.489 1.648,6.574 4.166,8.437l0,6.023c0,2.3 1.867,4.167 4.167,4.167l8.333,-0c2.3,-0 4.167,-1.867 4.167,-4.167l0,-4.166l33.333,-0l0,4.166c0,2.3 1.867,4.167 4.167,4.167l8.333,-0c2.3,-0 4.167,-1.867 4.167,-4.167l0,-6.023c2.519,-1.863 4.167,-4.948 4.167,-8.437l-0,-30.935l2.064,0c0.558,0 1.092,-0.221 1.487,-0.615c0.394,-0.395 0.615,-0.929 0.615,-1.487c0,-3.201 0,-9.261 0,-12.462c0,-0.558 -0.221,-1.092 -0.615,-1.487c-0.395,-0.394 -0.929,-0.615 -1.487,-0.615l-2.064,-0l-0,-10.978c-0,-5.681 -4.37,-10.294 -9.753,-10.294l-55.495,-0c-5.382,-0 -9.752,4.613 -9.752,10.294l-0,10.978Zm16.666,45.395c0,-2.3 -1.867,-4.167 -4.166,-4.167c-2.3,-0 -4.167,1.867 -4.167,4.167c0,2.299 1.867,4.166 4.167,4.166c2.299,0 4.166,-1.867 4.166,-4.166Zm50,-0c0,-2.3 -1.867,-4.167 -4.166,-4.167c-2.3,-0 -4.167,1.867 -4.167,4.167c0,2.299 1.867,4.166 4.167,4.166c2.299,0 4.166,-1.867 4.166,-4.166Zm-55.082,-8.334c-1.796,0 -3.251,-1.455 -3.251,-3.25c0,-6.376 0,-28.79 0,-35.166c0,-1.795 1.455,-3.25 3.251,-3.25c6.768,-0 45.064,-0 51.832,-0c1.795,-0 3.25,1.455 3.25,3.25c0,6.376 0,28.79 0,35.166c0,1.795 -1.455,3.25 -3.25,3.25l-51.832,0Zm51.053,-45.833c1.068,0 2.093,-0.425 2.849,-1.18c0.756,-0.756 1.18,-1.781 1.18,-2.85c0,-0.091 0,-0.182 0,-0.274c0,-1.068 -0.424,-2.093 -1.18,-2.849c-0.756,-0.756 -1.781,-1.18 -2.849,-1.18c-10.676,-0 -39.599,-0 -50.274,-0c-1.069,-0 -2.094,0.424 -2.85,1.18c-0.755,0.756 -1.18,1.781 -1.18,2.849c0,0.092 0,0.183 0,0.274c-0,1.069 0.425,2.094 1.18,2.85c0.756,0.755 1.781,1.18 2.85,1.18c10.675,0 39.598,0 50.274,0Z" style="fill: var(--color)" />
              </svg>

            {:else if departure.transport === 'metro'}
              T-bane
            {:else if departure.transport === 'rail'}
              <svg
                width="auto"
                height="1.2rem"
                viewBox="0 0 75 88"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
              >
                <path d="M8.333,84.722l-4.166,0l-4.167,2.778l75,-0l-4.167,-2.778l-4.166,0l-4.167,-2.778l4.167,0l-4.167,-2.777l-50,-0l-4.167,2.777l4.167,0l-4.167,2.778Zm50,-2.778l-41.666,0l-4.167,2.778l50,0l-4.167,-2.778Zm-58.333,-71.65l0,54.503c0,5.681 4.37,10.294 9.752,10.294l55.496,-0c5.382,-0 9.752,-4.613 9.752,-10.294l0,-54.503c0,-5.681 -4.37,-10.294 -9.752,-10.294l-55.496,0c-5.382,0 -9.752,4.613 -9.752,10.294Zm16.667,52.206c-0,-2.3 -1.867,-4.167 -4.167,-4.167c-2.3,0 -4.167,1.867 -4.167,4.167c0,2.3 1.867,4.167 4.167,4.167c2.3,-0 4.167,-1.867 4.167,-4.167Zm50,-0c-0,-2.3 -1.867,-4.167 -4.167,-4.167c-2.3,0 -4.167,1.867 -4.167,4.167c0,2.3 1.867,4.167 4.167,4.167c2.3,-0 4.167,-1.867 4.167,-4.167Zm-33.334,-54.167l0,37.5l-21.749,0c-1.795,0 -3.251,-1.455 -3.251,-3.25c0,-6.376 0,-24.623 0,-30.999c0,-1.795 1.456,-3.251 3.251,-3.251l21.749,0Zm8.334,0l21.749,0c1.795,0 3.251,1.456 3.251,3.251c-0,6.376 -0,24.623 -0,30.999c-0,1.795 -1.456,3.25 -3.251,3.25l-21.749,0l-0,-37.5Z" style="fill: var(--color);" />
              </svg>

            {:else if departure.transport === 'tram'}
              Trikk
            {:else if departure.transport === 'water'}
              <svg
                width="auto"
                height="1.3rem"
                viewBox="0 0 100 100"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
              >
                <path d="M16.667,43.333l-0,-26.666c-0,-1.105 0.439,-2.165 1.22,-2.947c0.781,-0.781 1.841,-1.22 2.946,-1.22l20.834,0l-0,-8.333l16.666,-0l0,8.333l20.834,0c1.105,0 2.165,0.439 2.946,1.22c0.781,0.782 1.22,1.842 1.22,2.947l0,26.666l4.525,1.359c1.026,0.308 1.893,1 2.422,1.931c0.529,0.931 0.68,2.03 0.42,3.069l-6.317,25.283c-2.69,0.139 -5.381,-0.246 -7.925,-1.133l5.209,-22.3l-31.667,-9.875l-31.667,9.875l5.209,22.296c-2.543,0.888 -5.235,1.275 -7.925,1.137l-6.317,-25.283c-0.26,-1.039 -0.109,-2.138 0.42,-3.069c0.529,-0.931 1.396,-1.623 2.422,-1.931l4.525,-1.359Zm8.333,-2.5l25,-7.5l25,7.5l-0,-20l-50,0l-0,20Zm-8.333,42.5c6.151,0.009 12.087,-2.259 16.666,-6.366c4.579,4.107 10.516,6.375 16.667,6.366c6.151,0.009 12.088,-2.259 16.667,-6.366c4.578,4.107 10.515,6.375 16.666,6.366l8.334,0l-0,8.334l-8.334,-0c-5.851,0.009 -11.601,-1.529 -16.666,-4.459c-5.066,2.93 -10.815,4.468 -16.667,4.459c-5.852,0.009 -11.601,-1.529 -16.667,-4.459c-5.065,2.93 -10.815,4.468 -16.666,4.459l-8.334,-0l0,-8.334l8.334,0Z" style="fill: var(--color)" />
              </svg>
            {:else}
              { departure.transport }
            {/if}
          </td>
          <td>{ departure.destination }</td>
          <td><strong>{ displayCountdown(departure.departureTime) }</strong></td>
        </tr>
      {/if}
    {/each}
  </tbody>
</table>

<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th {
    border-bottom: 1px solid var(--color);
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
  th:first-child,
  th:nth-child(2),
  td:nth-child(2) {
    text-align: center;
    white-space: nowrap;
    width: 0.1%;
  }
  td:last-child,
  th:last-child,
  th:nth-child(3) {
    white-space: nowrap;
    width: 0.1%;
  }
  td:nth-child(3) {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 650px) {
    th {
      font-size: .8rem;
    }
    td,
    th {
      padding: .6rem .4rem;
    }
  }
</style>