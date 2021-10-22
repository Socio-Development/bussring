<script lang="ts">
  import Table from './Table.svelte'

  export let location: string
  export let title: string
</script>

<svelte:head>
  <title>{ title }</title>
</svelte:head>

<div class="container">
  <h3>Departure</h3>
  <h1>{ location }</h1>
  
  <Table
    tableData={{
      headings: [
        'Avgang',
        'Destinasjon'
      ],
      body: [
        { time: '12:05', dest: 'Tromsø lufthavn' },
        { time: '13:25', dest: 'Tromsø lufthavn' },
        { time: '14:45', dest: 'Tromsø lufthavn' },
        { time: '16:00', dest: 'Tromsø lufthavn' },
        { time: '16:50', dest: 'Tromsø lufthavn' },
        { time: '17:10', dest: 'Tromsø lufthavn' },
        { time: '18:30', dest: 'Tromsø lufthavn' },
      ]
    }}
  />
</div>

<style>
  .container {
    padding: 2rem;
  }
  h1 {
    font-size: 3.2rem;
    margin-top: 0;
  }
  h3 {
    color: rgba(255, 255, 255, .8);
    margin: 0;
  }
</style>