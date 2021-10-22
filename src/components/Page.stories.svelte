<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Page from './Page.svelte'
</script>

<Meta
  title="Components/Page"
  component={Page}
/>

<Story name="Airport">
  <Page
    location="Tromsø Lufthavn"
    resultLimit={ 8 }
    stopPlaceId={ 52281 }
    title="Tromsø Lufthavn"
  />
</Story>

<Story name="Scandic">
  <Page
    location="Scandic Ishavshotel"
    resultLimit={ 8 }
    stopPlaceId={ 52806 }
    title="Scandic Ishavshotel"
  />
</Story>
