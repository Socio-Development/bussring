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
  expect(
    departureList.length
  ).toBe(7)
})