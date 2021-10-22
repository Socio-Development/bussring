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
    location: 'Scandic Ishavshotel',
    title: 'Scandic Ishavshotel',
    tableData: {
      headings: [
        'Avgang',
        'Destinasjon'
      ],
      body: [
        {
          expectedDepartureTime: new Date("2021-10-22T16:25:00+0200"),
          destinationDisplay: {
            frontText: "Tromsø lufthavn"
          },
          serviceJourney: {
            line: {
              publicCode: "FB92"
            }
          }
        },
        {
          expectedDepartureTime: new Date("2021-10-22T17:10:00+0200"),
          destinationDisplay: {
            frontText: "Tromsø lufthavn"
          },
          serviceJourney: {
            line: {
              publicCode: "FB92"
            }
          }
        },
        {
          expectedDepartureTime: new Date("2021-10-22T18:05:00+0200"),
          destinationDisplay: {
            frontText: "Tromsø lufthavn"
          },
          serviceJourney: {
            line: {
              publicCode: "FB92"
            }
          }
        },
        {
          expectedDepartureTime: new Date("2021-10-22T19:00:00+0200"),
          destinationDisplay: {
            frontText: "Tromsø lufthavn"
          },
          serviceJourney: {
            line: {
              publicCode: "FB92"
            }
          }
        },
        {
          expectedDepartureTime: new Date("2021-10-23T07:00:00+0200"),
          destinationDisplay: {
            frontText: "Tromsø lufthavn"
          },
          serviceJourney: {
            line: {
              publicCode: "FB92"
            }
          }
        },
      ]
    }
  }}
/>