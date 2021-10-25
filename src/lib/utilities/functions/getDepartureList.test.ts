import type { IApiData, IDeparture } from '$lib/interfaces'
import getDepartureList from './getDepartureList'

test('Is able to retrieve departure list', () => {
  const apiCallData: IApiData = {
    "data": {
      "stopPlace": {
        "name": "Scandic Ishavshotel",
        "id": "NSR:StopPlace:52806",
        "estimatedCalls": [
          {
            "expectedDepartureTime": "2021-10-25T10:40:00+0200",
            "destinationDisplay": {
              "frontText": "Tromsø lufthavn"
            },
            "serviceJourney": {
              "line": {
                "publicCode": "FB92",
                "transportMode": "bus"
              }
            }
          },
          {
            "expectedDepartureTime": "2021-10-25T11:20:00+0200",
            "destinationDisplay": {
              "frontText": "Tromsø lufthavn"
            },
            "serviceJourney": {
              "line": {
                "publicCode": "FB92",
                "transportMode": "bus"
              }
            }
          },
          {
            "expectedDepartureTime": "2021-10-25T12:05:00+0200",
            "destinationDisplay": {
              "frontText": "Tromsø lufthavn"
            },
            "serviceJourney": {
              "line": {
                "publicCode": "FB92",
                "transportMode": "bus"
              }
            }
          },
          {
            "expectedDepartureTime": "2021-10-25T12:30:00+0200",
            "destinationDisplay": {
              "frontText": "Tromsø lufthavn"
            },
            "serviceJourney": {
              "line": {
                "publicCode": "FB92S",
                "transportMode": "bus"
              }
            }
          },
          {
            "expectedDepartureTime": "2021-10-25T13:30:00+0200",
            "destinationDisplay": {
              "frontText": "Tromsø lufthavn"
            },
            "serviceJourney": {
              "line": {
                "publicCode": "FB92",
                "transportMode": "bus"
              }
            }
          },
          {
            "expectedDepartureTime": "2021-10-25T14:00:00+0200",
            "destinationDisplay": {
              "frontText": "Tromsø lufthavn"
            },
            "serviceJourney": {
              "line": {
                "publicCode": "FB92",
                "transportMode": "bus"
              }
            }
          },
          {
            "expectedDepartureTime": "2021-10-25T15:15:00+0200",
            "destinationDisplay": {
              "frontText": "Tromsø lufthavn"
            },
            "serviceJourney": {
              "line": {
                "publicCode": "FB92S",
                "transportMode": "bus"
              }
            }
          }
        ]
      }
    }
  }

  const departureList: IDeparture[] = getDepartureList(apiCallData)

  /**
   * Test number of returned objects
   */
  expect(
    departureList.length
  ).toBe(7)

  /**
   * Test departureTime property
   */
  expect(
    departureList[6].departureTime.toString()
  ).toBe('Mon Oct 25 2021 15:15:00 GMT+0200 (Central European Summer Time)')

  /**
   * Test destination property
   */
  expect(
    departureList[5].destination
  ).toBe("Tromsø lufthavn")

  /**
   * Test line property
   */
  expect(
    departureList[4].line
  ).toBe("FB92")
  expect(
    departureList[6].line
  ).toBe("FB92S")
})