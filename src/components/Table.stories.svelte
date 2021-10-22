<script lang="ts">
  import {
    Meta,
    Story
  } from '@storybook/addon-svelte-csf'
  import Table from './Table.svelte'
</script>

<Meta
  title="Components/Table"
  component={Table}
/>

<Story name="Default">
  <Table
    tableData={{
      headings: [
        'Avgang',
        'Destinasjon'
      ],
      body: [
        { time: '08:00', dest: 'Nordkjosbotten' },
        { time: '08:20', dest: 'Simavika' },
      ]
    }}
  />
</Story>