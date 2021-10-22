<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Page from './Page.svelte'
</script>

<Meta
  title="Components/Page"
  component={Page}
/>

<Template let:args>
  <Page
    location= "Scandic Ishavshotel"
    resultLimit={ 8 }
    stopPlaceId={ 52806 }
    tableHeadings={[
      'Avgang',
      'Destinasjon',
      'Forlater om'
    ]}
    title="Scandic Ishavshotel"
  />
</Template>

<Story
  name="ScandicIshavshotel"
/>

<!-- <Story
  name="TromsoLufthavn"
  args={{
    location: 'Tromsø Lufthavn',
    resultLimit: 8,
    stopPlaceId: 52281,
    tableHeadings: [
      'Avgang',
      'Destinasjon',
      'Forlater om'
    ],
    title: 'Tromsø Lufthavn'
  }}
/> -->