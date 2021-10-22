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
    resultLimit={ 8 }
    stopPlaceId={ 52281 }
    tableHeadings={[
      'Avgang',
      'Destinasjon',
      'Forlater om'
    ]}
  />
</Story>