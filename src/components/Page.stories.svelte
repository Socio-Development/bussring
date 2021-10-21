<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
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
  name="Default"
  args={{
    location: 'Tromsø Lufthavn',
    title: 'Tromsø Lufthavn'
  }}
/>