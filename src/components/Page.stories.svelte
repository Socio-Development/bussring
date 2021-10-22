<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import { Flyplassen, Scandic } from '../data/locations'
  import Page from './Page.svelte'
</script>

<Meta
  title="Components/Page"
  component={Page}
  argTypes={{
    location: {
      control: 'text',
      name: 'Location'
    },
    title: {
      control: 'text',
      name: 'Title'
    }
  }}
/>

<Template let:args>
  <Page
    {...args}
  />
</Template>

<Story
  name="ScandicIshavshotel"
  args={{
    location: 'Scandic Ishavshotel',
    title: 'Scandic Ishavshotel',
    stopPlaceData: Scandic,
    tableHeadings: [
      'Avgang',
      'Destinasjon',
      'Forlater om'
    ]
  }}
/>

<Story
  name="TromsoLufthavn"
  args={{
    location: 'Tromsø Lufthavn',
    title: 'Tromsø Lufthavn',
    stopPlaceData: Flyplassen,
    tableHeadings: [
      'Avgang',
      'Destinasjon',
      'Forlater om'
    ]
  }}
/>