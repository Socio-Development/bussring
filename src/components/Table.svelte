<script lang="ts">
  import type { ITableData } from '../types/interfaces'

  export let tableData: ITableData
</script>

<table>
  <thead>
    <tr>
      {#each tableData.headings as data}
        <th>{ data }</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each tableData.body as body}
      <tr>
        <td>{ body.expectedDepartureTime.toLocaleTimeString() }</td>
        <td>{ body.destinationDisplay.frontText }</td>
      </tr>
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
    font-size: 2rem;
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