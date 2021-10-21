<script lang="ts">
  import {
    Meta,
    Story,
    Template
  } from '@storybook/addon-svelte-csf'
  import Table from './Table.svelte'
</script>

<Meta
  title="Components/Table"
  component={Table}
/>

<Template let:args>
  <Table
    {...args}
  />
</Template>

<Story
  name="Default"
/>