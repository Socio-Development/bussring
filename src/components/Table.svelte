<script lang="ts">
  interface TableBody {
    time: string,
    dest: string
  }
  interface TableData {
    header: string[],
    body: TableBody[]
  }
  let tableData: TableData = {
    header: [
      'Departure',
      'Destination'
    ],
    body: [
      {
        time: '14:48',
        dest: 'Tromsø Lufthavn'
      },
      {
        time: '13:37',
        dest: 'Radisson Blu'
      }
    ]
  }
</script>

<table class="border">
  <thead>
    <tr class="underline">
      {#each tableData.header as data}
        <th>{ data }</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each tableData.body as body}
      <tr>
        <td>{ body.time }</td>
        <td>{ body.dest }</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    margin: 3rem auto;
    width: 100%;
  }
  th {
    border-bottom: 1px solid #fff;
    font-size: 2rem;
    text-align: left;
  }
  td,
  th {
    padding: .6rem 1rem;
  }
  .underline {
    border: 1px solid #fff;
  }
</style>