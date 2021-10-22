<script lang="ts">
  import {
    Meta,
    Story
  } from '@storybook/addon-svelte-csf'
  import Table from './Table.svelte'
  import { Scandic } from '../data/locations'
</script>

<Meta
  title="Components/Table"
  component={Table}
/>

<Story name="Default">
  <Table
    tableHeadings={[
      'Avgang',
      'Destinasjon',
      'Forlater om'
    ]}
    stopPlaceData={ Scandic }
  />
</Story>