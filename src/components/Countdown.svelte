<script lang="ts">
  import { countdownMessage } from '$lib/functions'

  export let eta: Date
</script>

<div class="Countdown">
  <div class="container">
    <p>Neste avgang</p>
    <h2>{ countdownMessage(eta) }</h2>
  </div>
</div>

<style>
  .Countdown {
    display: flex;
    justify-content: end;
  }
  .container {
    display: inline-flex;
    flex-direction: column;
    margin-top: auto;
  }
  p {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
    text-align: end;
  }
  h2 {
    font-size: 4.2rem;
    margin: 0;
  }
</style>