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