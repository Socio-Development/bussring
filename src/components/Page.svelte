<script lang="ts">
  export let location: string
  export let title: string
</script>

<svelte:head>
  <title>{ title }</title>
</svelte:head>

<h3>Departure</h3>
<h1>{ location }</h1>

<table>
  <thead>
    <tr class="underline">
      <th>Departure</th>
      <th>Destination</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>13:37</td>
      <td>Scandic Ishavshotel</td>
    </tr>
  </tbody>
</table>

<style>
  h1 {
    font-size: 3.2rem;
    margin-top: 0;
  }
  h3 {
    color: rgba(255, 255, 255, .8);
    margin-bottom: 0;
  }
  table {
    margin: 3rem auto;
  }
  th {
    border-bottom: 1px solid #fff;
    font-size: 2rem;
  }
  td,
  th {
    padding: .6rem 1rem;
  }
  .underline {
    border: 1px solid #fff;
  }
</style>