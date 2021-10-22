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
    }}
  />
</Story>